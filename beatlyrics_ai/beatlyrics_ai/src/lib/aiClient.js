import axios from 'axios';
import { getEnv } from './env';

const env = getEnv();

const openaiApiKey = env.VITE_OPENAI_API_KEY;
const anthropicApiKey = env.VITE_ANTHROPIC_API_KEY;
const geminiApiKey = env.VITE_GEMINI_API_KEY;

const AI_PROVIDERS = {
  OPENAI: 'openai',
  ANTHROPIC: 'anthropic',
  GEMINI: 'gemini',
};

class AIClient {
  constructor(provider = AI_PROVIDERS.OPENAI) {
    this.provider = provider;
  }

  async generateLyrics(prompt) {
    switch (this.provider) {
      case AI_PROVIDERS.OPENAI:
        return this.callOpenAI(prompt);
      case AI_PROVIDERS.ANTHROPIC:
        return this.callAnthropic(prompt);
      case AI_PROVIDERS.GEMINI:
        return this.callGemini(prompt);
      default:
        throw new Error('Unsupported AI provider');
    }
  }

  async callOpenAI(prompt) {
    if (!openaiApiKey) {
      throw new Error('OpenAI API key is missing');
    }
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-4o',
        messages: [{ role: 'user', content: prompt }],
      },
      {
        headers: {
          Authorization: `Bearer ${openaiApiKey}`,
          'Content-Type': 'application/json',
        },
      }
    );
    return response.data.choices[0].message.content;
  }

  async callAnthropic(prompt) {
    if (!anthropicApiKey) {
      throw new Error('Anthropic API key is missing');
    }
    // Implement Anthropic API call here
    // Placeholder return
    return 'Anthropic API integration not implemented yet.';
  }

  async callGemini(prompt) {
    if (!geminiApiKey) {
      throw new Error('Gemini API key is missing');
    }
    // Implement Gemini API call here
    // Placeholder return
    return 'Gemini API integration not implemented yet.';
  }
}

export default AIClient;
