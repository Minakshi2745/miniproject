from flask import Flask, request, jsonify
from flask_cors import CORS
import random  # Replace with actual model inference

app = Flask(__name__)
CORS(app)

@app.route('/analyze', methods=['POST'])
def analyze():
    data = request.get_json()
    content = data.get('content', '')
    source_type = data.get('source_type', 'text')

    # Replace with real NLP/Fake News Model
    is_fake = random.choice([True, False])

    response = {
        'input_type': source_type,
        'content_summary': content[:75] + '...' if len(content) > 75 else content,
        'verdict': 'Fake' if is_fake else 'Legitimate'
    }

    return jsonify(response)

if __name__ == '__main__':
    app.run(debug=True)
