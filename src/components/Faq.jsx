import React from "react";
import "../styles/faq.css";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinusCircle } from "react-icons/ai";

function Faq() {
  return (
    <div className="sec-t">
      <div className="faq-top">
        <div className="accordian">
          <div className="accordian-item" id="q1">
            <a className="ac-link" href="#q1">
              hie how are u<AiOutlineMinusCircle className="tt" />
              <AiOutlinePlus className="ff" />
            </a>
            <div className="ans">
              <p>jrfkjrslkfjlkhgklenrglkhdkjgnlrkblfgrbebveds</p>
            </div>
          </div>
          <div className="accordian-item" id="q2">
            <a className="ac-link" href="#q1">
              hie how are u<AiOutlineMinusCircle className="tt" />
              <AiOutlinePlus className="ff" />
            </a>
            <div className="ans">
              <p>jrfkjrslkfjlkhgklenrglkhdkjgnlrkblfgrbebveds</p>
            </div>
          </div>
          <div className="accordian-item" id="q3">
            <a className="ac-link" href="#q1">
              hie how are u<AiOutlineMinusCircle className="tt" />
              <AiOutlinePlus className="ff" />
            </a>
            <div className="ans">
              <p>jrfkjrslkfjlkhgklenrglkhdkjgnlrkblfgrbebveds</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;
