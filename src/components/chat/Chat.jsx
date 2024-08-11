import { useState } from "react";
import "./chat.scss";

function Chat() {
  const [chat, setChat] = useState(true);
  return (
    <div className="chat">
      <div className="messages">
        <h1>Messages</h1>
        <div className="message">
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <span>Test User</span>
          <p>Looking for a spacious apartment in downtown.</p>
        </div>
        <div className="message">
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <span>Test User</span>
          <p>Interested in a property near the beach.</p>
        </div>
        <div className="message">
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <span>Test User</span>
          <p>Need a house with a large backyard for my family.</p>
        </div>
        <div className="message">
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <span>Test User</span>
          <p>Seeking a commercial space in the city center.</p>
        </div>
        <div className="message">
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <span>Test User</span>
          <p>Looking for a property with a pool.</p>
        </div>
        <div className="message">
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <span>Test User</span>
          <p>Interested in a property with a view of the mountains.</p>
        </div>
      </div>
      {chat && (
        <div className="chatBox">
          <div className="top">
            <div className="user">
              <img
                src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
              />
              Test User
            </div>
            <span className="close" onClick={()=>setChat(null)}>X</span>
          </div>
          <div className="center">
            <div className="chatMessage">
              <p>We have several options available that match your criteria.</p>
              <span>Just now</span>
            </div>
            <div className="chatMessage own">
              <p>I'm excited to see them. Can you send over the details?</p>
              <span>Just now</span>
            </div>
            <div className="chatMessage">
              <p>Absolutely, here are the details:</p>
              <span>Just now</span>
            </div>
            <div className="chatMessage own">
              <p>Thank you! I'll review them shortly.</p>
              <span>Just now</span>
            </div>
            <div className="chatMessage">
              <p>We have several options available that match your criteria.</p>
              <span>Just now</span>
            </div>
            <div className="chatMessage own">
              <p>I'm excited to see them. Can you send over the details?</p>
              <span>Just now</span>
            </div>
            <div className="chatMessage">
              <p>Absolutely, here are the details:</p>
              <span>Just now</span>
            </div>
            <div className="chatMessage own">
              <p>Thank you! I'll review them shortly.</p>
              <span>Just now</span>
            </div>
            <div className="chatMessage">
              <p>We have several options available that match your criteria.</p>
              <span>Just now</span>
            </div>
            <div className="chatMessage own">
              <p>I'm excited to see them. Can you send over the details?</p>
              <span>Just now</span>
            </div>
          </div>
          <div className="bottom">
            <textarea></textarea>
            <button>Send</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Chat;
