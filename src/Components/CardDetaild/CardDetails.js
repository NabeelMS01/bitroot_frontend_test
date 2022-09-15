import React, { useContext, useEffect } from "react";
import { ComponentContext } from "../../Contexts/contexts";
import "../CardDetaild/CardDetails.css";
function CardDetails() {
  const { open, setOpen } = useContext(ComponentContext);
  const { cardData, setCardData } = useContext(ComponentContext);
 const altProPic="https://www.cornwallbusinessawards.co.uk/wp-content/uploads/2017/11/dummy450x450-300x300.jpg"
  useEffect(() => {
    console.log(cardData);
  }, []);

  return (
    <>
      {open ? (
        <div id="modalId" className="modal">
          <div class="modal-content">
            <span
              onClick={() => {
                setCardData({});
                setOpen(!open);
              }}
              class="close"
            >
              &times;
            </span>

            <div className="card-body">
              <img
                className="image-details"
                src={cardData.thumbnail.large}
                alt=""
                srcset=""
              />
            </div>

            <div className="Card-Body">
              <div className=" ">
                <h3>{cardData.title}</h3>
              </div>
              <div className="Card-detail-content">
                <p>{cardData.content}</p>
              </div>
              <div className=" profile">
                <div className="profile-img">
                  <img src={!cardData.author.avatar==""?cardData.author.avatar:altProPic} alt="" />
                </div>

                <div className="profile-name">
                  <p>
                    {cardData.author.name}- {cardData.author.role}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default CardDetails;
