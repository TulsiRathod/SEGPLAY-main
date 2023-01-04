import React, { useState } from 'react'

const RulesModal = ({rulesModal,closeModal,HandleAccept}) => {
  const [checkBox,setCheckBox]=useState(false);
  return (
    <>
     {/* Rules Modal */}
     <div
        id="rule_modal"
        class="modal"
        style={rulesModal ? { display: "flex" } : { display: "none" }}
      >
        <div class="modal-content" id="rules_modal">
          <span
            class="close"
            id="rules_modal_close"
            onClick={closeModal}
          >
            &times;
          </span>
          <p class="modal_title">Rules</p>
          <hr />
          <div class="scroll_content">
            <p class="msg">
              What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book. It has survived not only five centuries, but
              also the leap into electronic typesetting, remaining essentially
              unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently
              with desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum. Why do we use it? It is a long
              established fact that a reader will be distracted by the readable
              content of a page when looking at its layout. The point of using
              Lorem Ipsum is that it has a more-or-less normal distribution of
              letters, as opposed to using 'Content here, content here', making
              it look like readable English. Many desktop publishing packages
              and web page editors now use Lorem Ipsum as their default model
              text, and a search for 'lorem ipsum' will uncover many web sites
              still in their infancy. Various versions have evolved over the
              years, sometimes by accident, sometimes on purpose (injected
              humour and the like). Where does it come from? Contrary to popular
              belief, Lorem Ipsum is not simply random text. It has roots in a
              piece of classical Latin literature from 45 BC, making it over
              2000 years old. Richard McClintock, a Latin professor at
              Hampden-Sydney College in Virginia, looked up one of the more
              obscure Latin words, consectetur, from a Lorem Ipsum passage, and
              going through the cites of the word in classical literature,
              discovered the undoubtable source. Lorem Ipsum comes from sections
              1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The
              Extremes of Good and Evil) by Cicero, written in 45 BC. This book
              is a treatise on the theory of ethics, very popular during the
              Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
              amet..", comes from a line in section 1.10.32. The standard chunk
              of Lorem Ipsum used since the 1500s is reproduced below for those
              interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum
              et Malorum" by Cicero are also reproduced in their exact original
              form, accompanied by English versions from the 1914 translation by
              H. Rackham. Where can I get some? There are many variations of
              passages of Lorem Ipsum available, but the majority have suffered
              alteration in some form, by injected humour, or randomised words
              which don't look even slightly believable. If you are going to use
              a passage of Lorem Ipsum, you need to be sure there isn't anything
              embarrassing hidden in the middle of text. All the Lorem Ipsum
              generators on the Internet tend to repeat predefined chunks as
              necessary, making this the first true generator on the Internet.
              It uses a dictionary of over 200 Latin words, combined with a
              handful of model sentence structures, to generate Lorem Ipsum
              which looks reasonable. The generated Lorem Ipsum is therefore
              always free from repetition, injected humour, or
              non-characteristic words etc. If you are going to use a passage of
              Lorem Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text. All the Lorem Ipsum generators on
              the Internet tend to repeat predefined chunks as necessary, making
              this the first true generator on the Internet. It uses a
              dictionary of over 200 Latin words, combined with a handful of
              model sentence structures, to generate Lorem Ipsum which looks
              reasonable. The generated Lorem Ipsum is therefore always free
              from repetition, injected humour, or non-characteristic words etc.
              If you are going to use a passage of Lorem Ipsum, you need to be
              sure there isn't anything embarrassing hidden in the middle of
              text. All the Lorem Ipsum generators on the Internet tend to
              repeat predefined chunks as necessary, making this the first true
              generator on the Internet. It uses a dictionary of over 200 Latin
              words, combined with a handful of model sentence structures, to
              generate Lorem Ipsum which looks reasonable. The generated Lorem
              Ipsum is therefore always free from repetition, injected humour,
              or non-characteristic words etc. If you are going to use a passage
              of Lorem Ipsum, you need to be sure there isn't anything
              embarrassing hidden in the middle of text. All the Lorem Ipsum
              generators on the Internet tend to repeat predefined chunks as
              necessary, making this the first true generator on the Internet.
              It uses a dictionary of over 200 Latin words, combined with a
              handful of model sentence structures, to generate Lorem Ipsum
              which looks reasonable. The generated Lorem Ipsum is therefore
              always free from repetition, injected humour, or
              non-characteristic words etc. If you are going to use a passage of
              Lorem Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text. All the Lorem Ipsum generators on
              the Internet tend to repeat predefined chunks as necessary, making
              this the first true generator on the Internet. It uses a
              dictionary of over 200 Latin words, combined with a handful of
              model sentence structures, to generate Lorem Ipsum which looks
              reasonable. The generated Lorem Ipsum is therefore always free
              from repetition, injected humour, or non-characteristic words etc.
            </p>
          </div>
                {HandleAccept?<>
          <div style={{ display: "flex", width: "300px", height: "10px",margin:"15px",alignItems:"center"}}>
            <div style={{margin:"10px"}}>
              <input type="checkbox" checked={checkBox?'checked':''} onClick={()=>{setCheckBox(checkBox?false:true)}}/>
            </div>{" "}
            <div>
              <label>I agree with above rules.</label>
            </div>
          </div>
      
          <div class="row" style={{ margin: "auto", marginBottom: " 30px" }}>
            <button id="agree" class="modal-btn" disabled={!checkBox} onClick={HandleAccept}>
              Agree
            </button>
          </div>
          </>
          :
          <div class="row" style={{ margin: "20px auto" }}>
          <button id="agree" class="modal-btn" onClick={closeModal}>
            Close
          </button>
        </div>
          }
          
        </div>
      </div> 
    </>
  )
}

export default RulesModal