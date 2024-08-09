import "./Sidebar.css";
import { assets } from "../../assets/assets";
import { useContext, useState } from "react";
import { Context } from "../../context/Context";

export const Sidebar = () => {
  const [extended, setExtended] = useState(false);
  const { onSent, prevPrompt, setRecentPrompt, newChat } = useContext(Context);

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt);
    await onSent(prompt);
  };

  return (
    <div className="sidebar">
      <div className="top">
        <img
          className="menu"
          src={assets.menu_icon}
          alt="menuIcon"
          onClick={() => setExtended(!extended)}
        />
        <div onClick={() => newChat()} className="new-chat">
          <img src={assets.plus_icon} alt="plusIcon" />
          {extended && <p>New Chat</p>}
        </div>
        {extended && (
          <div className="recent">
            <p className="recent-title">Recent</p>
            {prevPrompt.map((item, index) => {
              return (
                <div
                  onClick={() => {
                    loadPrompt(item);
                  }}
                  className="recent-entry"
                >
                  <img src={assets.message_icon} alt="messageIcon" />
                  <p>{item.slice(0, 18)} ...</p>
                </div>
              );
            })}
          </div>
        )}
      </div>
      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={assets.question_icon} alt="questionIcon" />
          {extended && <p>Help</p>}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.history_icon} alt="questionIcon" />
          {extended && <p>Activity</p>}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.setting_icon} alt="questionIcon" />
          {extended && <p>Settings</p>}
        </div>
      </div>
    </div>
  );
};
