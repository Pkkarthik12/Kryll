import asyncio
import random

class AIService:
    async def get_response(self, message: str):
        # Simulate network latency
        await asyncio.sleep(1)
        
        message_lower = message.lower()
        
        if "hello" in message_lower or "hi" in message_lower:
            return {
                "text": "Hello! I'm Kryll, your AI workspace assistant. I can help you write code, draft documents, or just chat. What's on your mind?",
                "artifact": None
            }
        
        if "code" in message_lower or "python" in message_lower:
            return {
                "text": "Sure! Here is a simple Python script to calculate Fibonacci numbers. I've opened it in the Artifact Viewer for you.",
                "artifact": {
                    "title": "fibonacci.py",
                    "type": "code",
                    "language": "python",
                    "content": "def fibonacci(n):\n    if n <= 1:\n        return n\n    return fibonacci(n-1) + fibonacci(n-2)\n\n# Print first 10 numbers\nfor i in range(10):\n    print(fibonacci(i))"
                }
            }
            
        if "html" in message_lower or "css" in message_lower:
            return {
                "text": "I can certainly help with web development. Here's a modern button component using CSS variables.",
                "artifact": {
                    "title": "button.html",
                    "type": "code",
                    "language": "html",
                    "content": "<button class='glow-button'>Click Me</button>\n\n<style>\n.glow-button {\n  padding: 12px 24px;\n  background: #4f46e5;\n  color: white;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: box-shadow 0.3s;\n}\n.glow-button:hover {\n  box-shadow: 0 0 15px rgba(79, 70, 229, 0.6);\n}\n</style>"
                }
            }

        responses = [
            "That's an interesting topic! Tell me more.",
            "I'm processing that... can you give me more context?",
            "As an AI, I'd recommend looking at it from a different perspective.",
            "I can help with that. Should I generate some code or a document?"
        ]
        
        return {
            "text": random.choice(responses),
            "artifact": None
        }

ai_service = AIService()
