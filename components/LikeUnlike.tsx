"use client"
import { Provider, LikeButton, UpdownButton } from "@lyket/react";

export default function LikeUnkije(){
    return(
        <Provider apiKey="pt_8826ea21fd44bf6839973ac7fb59ee"
        theme={{
            colors: {
              icon: "#116A7B",
              text: "#116A7B",
              primary: "#CDC2AE",
              secondary: "CDC2AE",
              highlight: "#116A7B"
            }
          }}
        >
            <div className="text-center mx-auto likeButton">
              <h3 className="text-center">Si tu aimes ce post, n'hésite pas à liker :</h3>
          <UpdownButton 
            namespace="testing-react"
            id="everybody-like-now"
            component={UpdownButton.templates.Simple}
          />
          </div>
        </Provider>
    )
}