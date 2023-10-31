from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    div_content = "This is content"
    return render_template('index.html', div_content=div_content)

if __name__ == "__main__":
    app.run(debug=True)
