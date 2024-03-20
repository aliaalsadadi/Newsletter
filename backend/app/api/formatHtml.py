from bs4 import BeautifulSoup
from base.models import HtmlData
from datetime import datetime


def ThanksSoup():
    with open("templates/thanks.html", "r", encoding="utf-8") as f:
        html_content = f.read()
    soup = BeautifulSoup(html_content, "html.parser")
    return soup


def formathtml(data: HtmlData):
    with open("mail_layout.html", "r", encoding="utf-8") as f:
        html_content = f.read()
    soup = BeautifulSoup(html_content, "html.parser")
    now = datetime.now()
    date_str = now.strftime('%B %d,%Y')
    date_tag = soup.find("span", id="date")
    date_tag.string = date_str
    idea1_tag = soup.find("p", id="idea1")
    idea2_tag = soup.find("p", id="idea2")
    idea3_tag = soup.find("p", id="idea3")
    idea1_tag.string = data.idea1
    idea2_tag.string = data.idea2
    idea3_tag.string = data.idea3
    print(idea1_tag.string, idea2_tag.string, idea3_tag.string)

    quote1_tag = soup.find("p", id="quote1")
    quote2_tag = soup.find("p", id="quote2")
    quote1_tag.string = data.quote1
    quote2_tag.string = data.quote2
    print(quote1_tag.string, quote2_tag.string)

    question_tag = soup.find("p", id="question1")
    question_tag.string = data.question
    print(question_tag.string)

    title_tag = soup.find("h1", id="title")
    title_tag.string += data.title
    print(title_tag.string)
    tags_to_convert = ["idea1", "idea2", "idea3",
                       "quote1", "quote2", "question1", "title"]

    # Iterate over tags and perform newline to <br> conversion
    for tag_id in tags_to_convert:
        tag = soup.find("p", id=tag_id) or soup.find("h1", id=tag_id)
        if tag:
            # Split the string by newline characters
            lines = tag.string.split("\n")
            # Clear the existing content
            tag.string = ""
            # Iterate over lines and append them with <br> elements
            for idx, line in enumerate(lines):
                tag.append(line)
                if idx < len(lines)-1:
                    tag.append(soup.new_tag("br"))
    return soup
