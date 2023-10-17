"use client"
import { Provider, LikeButton, ClapButton } from "@lyket/react";

export default function LikeUnkije(){
    return(
        <Provider apiKey="pt_8826ea21fd44bf6839973ac7fb59ee">
            <div className="text-center mx-auto likeButton">
              <h3 className="text-center">Si tu aimes ce post, n'hésite pas à liker :</h3>
          <LikeButton 
            namespace="testing-react"
            id="everybody-like-now"
            component={LikeButton.templates.Twitter}
          />
          </div>
        </Provider>
    )
}