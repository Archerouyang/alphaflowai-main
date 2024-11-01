import anthropic
from flask import jsonify

class ClaudeAPI:
    def __init__(self):
        self.client = anthropic.Client(api_key='your-api-key')
        self.conversation_history = []
        
    def get_response(self, user_message):
        try:
            # Add user message to history
            self.conversation_history.append({"role": "user", "content": user_message})
            
            # Create system prompt for behavioral interview context
            system_prompt = """You are an AI interviewer conducting a behavioral interview. Your goal is to thoroughly assess a job candidate's professional competencies, interpersonal skills, and potential organizational fit.

            Follow these key guidelines:
            - Use the STAR method (Situation, Task, Action, Result) for all responses
            - Ask one question at a time
            - Listen carefully to the candidate's responses
            - Ask follow-up questions to gain deeper insights

            Evaluate answers based on:
            - Clarity of communication
            - Specificity of examples
            - Evidence of problem-solving
            - Demonstration of professional growth
            - Ability to reflect on past experiences

            Keep responses focused and constructive. If the candidate's response is unclear or lacks detail, ask specific follow-up questions to help them provide a more complete STAR response."""

            # Convert conversation history to messages format
            messages = []
            for msg in self.conversation_history:
                if msg["role"] == "user":
                    messages.append({
                        "role": "user",
                        "content": msg["content"]
                    })
                else:
                    messages.append({
                        "role": "assistant",
                        "content": msg["content"]
                    })

            # Get response from Claude
            response = self.client.messages.create(
                model="claude-3-sonnet-20240229",
                max_tokens=1024,
                temperature=0.7,
                system=system_prompt,
                messages=messages
            )
            
            # Extract the response content
            ai_response = response.content[0].text

            # Add Claude's response to history
            self.conversation_history.append({"role": "assistant", "content": ai_response})
            
            return {"status": "success", "response": ai_response}
            
        except Exception as e:
            print(f"Error in get_response: {str(e)}")  # Add debugging
            return {"status": "error", "message": "I apologize, but I encountered an error. Please try again."}

    def start_interview(self):
        introduction = """Hello! I'm your AI interviewer today. I'll be asking you behavioral questions to understand your experiences and approach to various professional situations. 

Please structure your responses using the STAR method:
- Situation: Set the context
- Task: Describe the challenge
- Action: Explain what you did
- Result: Share the outcome

Let's begin with our first question:

Describe a time when you had to work closely with a colleague who had a very different working style from your own. How did you navigate that situation?"""
        
        # Add the introduction to conversation history
        self.conversation_history.append({"role": "assistant", "content": introduction})
        return {"status": "success", "response": introduction}
