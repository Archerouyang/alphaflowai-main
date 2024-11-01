from flask import Blueprint, render_template, request, jsonify, current_app
import os
from .claude_api import ClaudeAPI

views = Blueprint('views', __name__)
claude_api = ClaudeAPI()

@views.route('/')
def home():
    return render_template('landing.html')

@views.route('/interview-demo')
def interview_demo():
    return render_template('interview-demo.html')

@views.route('/api/chat', methods=['POST'])
def chat():
    data = request.json
    user_message = data.get('message', '')
    
    if not user_message:
        return jsonify({"status": "error", "message": "No message provided"})
    
    response = claude_api.get_response(user_message)
    return jsonify(response)
