import React from 'react'
import ProcessSection from './ProcessSection'
import ReviewSlider from './ReviewSlider'
import FAQSection from './FAQSection'

export default function AdditionalInfoSection() {
    return (
        <div>
            <div className="min-h-screen w-full relative ">
                {/* Arctic Lights Background with Top Glow */}
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        background: "radial-gradient(ellipse 60% 60% at 20% 40%, rgba(34, 197, 94, 0.25), transparent 70%), #151e1b",
                    }}
                />

                <ProcessSection></ProcessSection>
                <ReviewSlider></ReviewSlider>
                <FAQSection></FAQSection>
            </div>



        </div>
    )
}
