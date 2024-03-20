import base64
from email.message import EmailMessage
from email.mime.text import MIMEText
from .formatHtml import formathtml, HtmlData
from .authorize import authorize
import google.auth
from bs4 import BeautifulSoup
from googleapiclient.discovery import build
from googleapiclient.errors import HttpError


def gmail_send_message(subject: str, toEmail: str, userHash: str, soup: BeautifulSoup):
    def create_message(sender, to, subject, message_text):
        print(sender + ', ' + to + ', ' + subject + ', ' + message_text)
        message = MIMEText(message_text, 'html')
        message['to'] = toEmail
        message['from'] = sender
        message['subject'] = subject
        print(message)
        return {'raw': base64.urlsafe_b64encode(message.as_bytes()).decode()}

    creds = authorize()

    try:
        service = build("gmail", "v1", credentials=creds)
        unsubLink_tag = soup.find("a", id="unsubLink")
        unsubLink_tag['href'] = f"http://127.0.0.1:8000/unsubscribe/{userHash}"
        msg = str(soup)
        create_message = create_message(sender="alialaaalsadadi2006@gmail.com",
                                        to=toEmail,
                                        subject=subject,
                                        message_text=msg
                                        )
        send_message = (
            service.users()
            .messages()
            .send(userId="me", body=create_message)
            .execute()
        )
        print(f'Message Id: {send_message["id"]}')
    except HttpError as error:
        print(f"An error occurred: {error}")
        send_message = None
    return send_message


if __name__ == "__main__":
    send_thanks_message("aliaalsadadi@outlook.com", "123456")
