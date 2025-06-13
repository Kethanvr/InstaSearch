# Gemini AI Image Generation Setup

## Overview

This app now includes AI-powered image generation using Google's Gemini 2.0 Flash model. Users can generate stunning images from text prompts directly in the InstaSearch interface.

## Setup Instructions

### 1. Get your Gemini API Key

1. Visit [Google AI Studio](https://ai.google.dev/gemini-api/docs/api-key)
2. Sign in with your Google account
3. Create a new API key
4. Copy the API key

### 2. Configure Environment Variables

Create a `.env.local` file in the root directory and add:

```bash
GEMINI_API_KEY=your_actual_api_key_here
```

### 3. Features

- **Text-to-Image Generation**: Enter any descriptive prompt to generate images
- **Multiple Image Support**: Generate multiple variations at once
- **Download Capability**: Download generated images directly
- **Responsive Design**: Works on desktop and mobile
- **Real-time Generation**: See your images appear as they're generated

### 4. Usage Examples

Try these prompts to get started:

- "A serene mountain landscape at sunset with a crystal clear lake"
- "A futuristic cyberpunk city with neon lights and flying cars"
- "A cute cartoon cat wearing a wizard hat in a magical forest"
- "An abstract painting with vibrant colors and geometric shapes"

### 5. Technical Details

- **Model**: `gemini-2.0-flash-exp-image-generation`
- **API Endpoint**: `/api/generate-image`
- **Output Format**: Base64 encoded images
- **Response Modalities**: Both text and images

## Troubleshooting

### Common Issues

1. **API Key Error**: Make sure your `GEMINI_API_KEY` is set correctly in `.env.local`
2. **Generation Fails**: Check your internet connection and API key validity
3. **Slow Generation**: Image generation can take 10-30 seconds depending on complexity

### Rate Limits

- Google AI has rate limits on the Gemini API
- For high-volume usage, consider upgrading your plan

## Support

For more information about the Gemini API, visit [Google AI Documentation](https://ai.google.dev/gemini-api/docs).
