# 🌐 Travel AI Extractor — API Reference & Integration Guide

> **Base URL (Local)**: `http://localhost:8000`  
> **Base URL (Production)**: `https://travel-api.codesec.me`  
> **OpenAPI Interactive Docs**: `https://travel-api.codesec.me/docs`  
> **OpenAPI JSON Schema**: `https://travel-api.codesec.me/openapi.json`  

---

## 🔐 Authentication & Security

All API endpoints (except `/health` and OpenAPI docs) require authentication using the `X-API-Key` header.

```http
X-API-Key: your-secure-api-key-here
```

| HTTP Status | Description |
|---|---|
| `401 Unauthorized` | Missing or invalid `X-API-Key` header. |
| `422 Unprocessable Entity` | Invalid request payload or missing required fields. |
| `500 Internal Server Error` | Unexpected backend or upstream provider error. |

---

## 📋 Endpoints Overview

| Method | Endpoint | Description |
|---|---|---|
| `POST` | [`/extract/universal`](#1-universal-multi-source-extraction) | **Recommended**: Universal ingestion (Instagram Reels, video URLs, image URLs, text captions, raw files). |
| `POST` | [`/extract/async`](#2-asynchronous-queue-extraction) | Enqueue background extraction job for heavy videos/batch processing (`202 Accepted`). |
| `GET` | [`/extract/jobs/{job_id}`](#3-poll-async-job-status) | Poll status and results of an async background extraction job. |
| `POST` | [`/extract/image`](#4-direct-image-upload) | Direct multipart image file upload (`.jpg`, `.jpeg`, `.png`, `.webp`). |
| `POST` | [`/extract/video`](#5-direct-video-upload) | Direct multipart video file upload (`.mp4`, `.mov`, `.avi`, `.mkv`). |
| `POST` | [`/extract/text`](#6-direct-text-extraction) | Direct JSON travel text caption / post extraction. |
| `GET` | [`/cache`](#7-get-cache-statistics) | Retrieve in-memory cache statistics and hit rates. |
| `DELETE` | [`/cache`](#8-clear-cache) | Purge in-memory extraction cache and flush Redis. |
| `DELETE` | [`/cache/prune`](#9-prune-stale-database-logs) | Prune historical audit logs older than specified days. |
| `GET` | [`/health`](#10-health-check) | Public liveness & readiness probe (No API key required). |

---

## 📍 Data Schemas

### `PlaceLocation` Object

Every extracted place returned in the `places` array contains structured, verified geographic data:

```json
{
  "name": "Chikkamagaluru",
  "city": "Chikkamagaluru",
  "state": "Karnataka",
  "country": "India",
  "location_type": "city",
  "confidence": 97,
  "address": "Chikkamagaluru, Karnataka, India",
  "latitude": 13.3161441,
  "longitude": 75.7720439,
  "place_id": "ChIJ3YmoyGLXujsRFr6UUhVJz7M",
  "verified": true,
  "sources": [
    "instagram_hashtag",
    "instagram_caption",
    "google_places"
  ],
  "confidence_breakdown": {
    "caption": 0.0,
    "ocr": 0.0,
    "speech": 0.0,
    "vision": 0.0,
    "url_metadata": 0.0,
    "google_places": 0.97,
    "final": 0.97
  }
}
```

#### Field Reference:
- `name` *(string)*: Canonical name verified by Google Places.
- `city` *(string | null)*: City or municipality where the place is situated.
- `state` *(string | null)*: State, province, or administrative region.
- `country` *(string | null)*: Country name.
- `location_type` *(string)*: Geographic hierarchy classification:
  - `"attraction"`: Natural landmark, monument, temple, viewpoint, park, museum.
  - `"venue"`: Restaurant, cafe, hotel, resort, shop.
  - `"neighborhood"`: Suburb, locality, ward.
  - `"city"`: City, town, municipal area.
  - `"district"`: County, district, administrative region level 2.
  - `"state"`: State, province, administrative region level 1.
  - `"country"`: Sovereign country entity.
- `confidence` *(integer 0–100)*: Multi-signal corroboration score.
- `address` *(string | null)*: Formatted street address.
- `latitude` *(float | null)*: GPS Latitude coordinate.
- `longitude` *(float | null)*: GPS Longitude coordinate.
- `place_id` *(string | null)*: Google Places canonical identifier.
- `verified` *(boolean)*: `true` if confirmed by Google Places API or strict canonical alias match.
- `sources` *(array[string])*: Supporting evidence sources (`instagram_caption`, `instagram_hashtag`, `platform_geolocation`, `ocr`, `speech`, `vision`, `google_places`).
- `confidence_breakdown` *(object)*: Multi-modal scoring breakdown across all pipeline stages.

---

### `ImageExtractionResponse` Object

```json
{
  "status": "success",
  "destination": "Chikkamagaluru",
  "places": [ ... ],
  "reason": null,
  "execution_time_seconds": 0.454
}
```

#### Status Values:
- `"success"`: One or more verified geographic places identified.
- `"requires_more_data"`: Content analyzed, but no verified location evidence found (prevents AI hallucination).

---

## 🚀 API Endpoints

### 1. Universal Multi-Source Extraction

Unified endpoint that accepts text, image URLs, video URLs, Instagram Reels/Posts, or Base64 encoded media.

- **URL**: `POST /extract/universal`
- **Headers**:
  - `Content-Type: application/json`
  - `X-API-Key: <YOUR_API_KEY>`

#### Request Payload:
```json
{
  "source_type": "video_url",
  "content": "https://www.instagram.com/reel/Dafj_2ES2JR/",
  "context": "Optional user context or hints",
  "metadata": {
    "author": "@traveler"
  }
}
```

| Source Type | `content` Format |
|---|---|
| `"text"` | Raw text, captions, travel blog snippets. |
| `"video_url"` | Instagram Reel/Post URL, TikTok URL, direct `.mp4` URL. |
| `"image_url"` | Public direct image URL (`.jpg`, `.png`, `.webp`). |
| `"image_base64"` | Base64 encoded image string. |
| `"video_base64"` | Base64 encoded video string. |

#### cURL Example:
```bash
curl -X POST "https://travel-api.codesec.me/extract/universal" \
  -H "X-API-Key: travel_prod_sec_key_9981" \
  -H "Content-Type: application/json" \
  -d '{
    "source_type": "video_url",
    "content": "https://www.instagram.com/reel/Dafj_2ES2JR/"
  }'
```

#### Response (`200 OK`):
```json
{
  "status": "success",
  "destination": "Chikkamagaluru",
  "places": [
    {
      "name": "Chikkamagaluru",
      "city": "Chikkamagaluru",
      "state": "Karnataka",
      "country": "India",
      "location_type": "city",
      "confidence": 97,
      "address": "Chikkamagaluru, Karnataka, India",
      "latitude": 13.3161441,
      "longitude": 75.7720439,
      "place_id": "ChIJ3YmoyGLXujsRFr6UUhVJz7M",
      "verified": true,
      "sources": [
        "instagram_hashtag",
        "instagram_caption",
        "google_places"
      ],
      "confidence_breakdown": {
        "caption": 0.0,
        "ocr": 0.0,
        "speech": 0.0,
        "vision": 0.0,
        "url_metadata": 0.0,
        "google_places": 0.97,
        "final": 0.97
      }
    }
  ],
  "reason": null,
  "execution_time_seconds": 0.454
}
```

---

### 2. Asynchronous Queue Extraction

For heavy video files or batch jobs where clients prefer non-blocking execution.

- **URL**: `POST /extract/async`
- **Headers**:
  - `Content-Type: application/json`
  - `X-API-Key: <YOUR_API_KEY>`

#### Request Payload:
```json
{
  "source_type": "video_url",
  "content": "https://www.instagram.com/reel/Dafj_2ES2JR/"
}
```

#### Response (`202 Accepted`):
```json
{
  "job_id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
  "status": "queued",
  "message": "Job successfully queued for background extraction."
}
```

---

### 3. Poll Async Job Status

- **URL**: `GET /extract/jobs/{job_id}`
- **Headers**:
  - `X-API-Key: <YOUR_API_KEY>`

#### Response (`200 OK` - Completed):
```json
{
  "job_id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
  "status": "completed",
  "created_at": 1740384800.0,
  "completed_at": 1740384801.5,
  "result": {
    "status": "success",
    "destination": "Chikkamagaluru",
    "places": [ ... ],
    "reason": null,
    "execution_time_seconds": 0.454
  },
  "error": null
}
```

---

### 4. Direct Image Upload

- **URL**: `POST /extract/image`
- **Headers**:
  - `X-API-Key: <YOUR_API_KEY>`
- **Content-Type**: `multipart/form-data`

#### Form Data:
- `file`: Image binary (`.jpg`, `.jpeg`, `.png`, `.webp`)
- `context` *(optional string)*: Additional text context

#### cURL Example:
```bash
curl -X POST "https://travel-api.codesec.me/extract/image" \
  -H "X-API-Key: travel_prod_sec_key_9981" \
  -F "file=@/path/to/screenshot.jpg" \
  -F "context=Visiting temples in Kyoto"
```

---

### 5. Direct Video Upload

- **URL**: `POST /extract/video`
- **Headers**:
  - `X-API-Key: <YOUR_API_KEY>`
- **Content-Type**: `multipart/form-data`

#### Form Data:
- `file`: Video binary (`.mp4`, `.mov`, `.avi`, `.mkv`)
- `context` *(optional string)*: Additional text context

#### cURL Example:
```bash
curl -X POST "https://travel-api.codesec.me/extract/video" \
  -H "X-API-Key: travel_prod_sec_key_9981" \
  -F "file=@/path/to/reel.mp4"
```

---

### 6. Direct Text Extraction

- **URL**: `POST /extract/text`
- **Headers**:
  - `Content-Type: application/json`
  - `X-API-Key: <YOUR_API_KEY>`

#### Request Payload:
```json
{
  "text": "Top places to visit in Bali: Uluwatu Temple, Tegalalang Rice Terrace, and Tanah Lot.",
  "context": "Summer vacation 2026"
}
```

---

### 7. Get Cache Statistics

- **URL**: `GET /cache`
- **Headers**:
  - `X-API-Key: <YOUR_API_KEY>`

#### Response (`200 OK`):
```json
{
  "status": "success",
  "memory_cache_entries": 42,
  "db_extraction_logs": 1284,
  "redis_connected": true,
  "cache_version": "v6.0_places_canonical"
}
```

---

### 8. Clear Cache

- **URL**: `DELETE /cache`
- **Headers**:
  - `X-API-Key: <YOUR_API_KEY>`

#### Response (`200 OK`):
```json
{
  "status": "success",
  "message": "Memory cache cleared and Redis cache flushed successfully."
}
```

---

### 9. Prune Stale Database Logs

- **URL**: `DELETE /cache/prune?days=30`
- **Headers**:
  - `X-API-Key: <YOUR_API_KEY>`

#### Response (`200 OK`):
```json
{
  "status": "success",
  "message": "Pruned 150 extraction logs older than 30 days."
}
```

---

### 10. Health Check

Public endpoint for container orchestrators, load balancers, and uptime monitors.

- **URL**: `GET /health`
- **Authentication**: None required

#### Response (`200 OK`):
```json
{
  "status": "healthy",
  "version": "1.0.0",
  "services": {
    "gemini": "configured",
    "google_places": "configured",
    "redis": "connected",
    "database": "connected"
  }
}
```

---

## 💻 SDK & Code Integration Examples

### TypeScript / Next.js / Node.js
```typescript
interface PlaceLocation {
  name: string;
  city?: string;
  state?: string;
  country?: string;
  location_type?: string;
  confidence: number;
  address?: string;
  latitude?: number;
  longitude?: number;
  place_id?: string;
  verified: boolean;
  sources: string[];
}

interface ExtractionResponse {
  status: 'success' | 'requires_more_data';
  destination?: string;
  places: PlaceLocation[];
  reason?: string;
  execution_time_seconds: number;
}

export async function extractTravelLocation(urlOrText: string): Promise<ExtractionResponse> {
  const response = await fetch('https://travel-api.codesec.me/extract/universal', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-API-Key': process.env.TRAVEL_AI_API_KEY!,
    },
    body: JSON.stringify({
      source_type: urlOrText.startsWith('http') ? 'video_url' : 'text',
      content: urlOrText,
    }),
  });

  if (!response.ok) {
    throw new Error(`Extraction failed with HTTP ${response.status}`);
  }

  return response.json();
}
```

### Python
```python
import httpx


def extract_instagram_reel(reel_url: str, api_key: str) -> dict:
    url = "https://travel-api.codesec.me/extract/universal"
    headers = {"X-API-Key": api_key}
    payload = {
        "source_type": "video_url",
        "content": reel_url,
    }

    with httpx.Client(timeout=30.0) as client:
        resp = client.post(url, json=payload, headers=headers)
        resp.raise_for_status()
        return resp.json()


# Example usage:
# result = extract_instagram_reel("https://www.instagram.com/reel/Dafj_2ES2JR/", "your-key")
# print(result["destination"], result["places"][0]["state"])
```

### iOS (Swift)
```swift
import Foundation

struct PlaceLocation: Codable {
    let name: String
    let city: String?
    let state: String?
    let country: String?
    let locationType: String?
    let confidence: Int
    let address: String?
    let latitude: Double?
    let longitude: Double?
    let verified: Bool
}

struct ExtractionResponse: Codable {
    let status: String
    let destination: String?
    let places: [PlaceLocation]
    let executionTimeSeconds: Double
}

func extractTravelPlaces(url: String, apiKey: String, completion: @escaping (Result<ExtractionResponse, Error>) -> Void) {
    guard let endpoint = URL(string: "https://travel-api.codesec.me/extract/universal") else { return }
    
    var request = URLRequest(url: endpoint)
    request.httpMethod = "POST"
    request.setValue("application/json", forHTTPHeaderField: "Content-Type")
    request.setValue(apiKey, forHTTPHeaderField: "X-API-Key")
    
    let body: [String: Any] = ["source_type": "video_url", "content": url]
    request.httpBody = try? JSONSerialization.data(withJSONObject: body)
    
    URLSession.shared.dataTask(with: request) { data, _, error in
        if let error = error { completion(.failure(error)); return }
        guard let data = data else { return }
        do {
            let decoder = JSONDecoder()
            decoder.keyDecodingStrategy = .convertFromSnakeCase
            let res = try decoder.decode(ExtractionResponse.self, from: data)
            completion(.success(res))
        } catch {
            completion(.failure(error))
        }
    }.resume()
}
```