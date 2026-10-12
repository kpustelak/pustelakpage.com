"use client"

import SectionTab from "@/components/global/section-tab";
import FormInput from "@/components/contact/form-input";
import {useState} from "react";
import FormMessageBox from "@/components/contact/form-messagebox";
import FormSelection from "@/components/contact/form-selection";

export default function Contact(){
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [companyName, setCompanyName] = useState("")
    const [linkToOffer, setLinkToOffer] = useState("")
    const [message, setMessage] = useState("")

    return(
        <div className="section-container">
            <SectionTab title="Contact" fullWidth={true}>
                <h2>Lorem ipsum sit amet</h2>
                <div className="flex gap-x-16">
                    <div className="w-1/2 flex flex-col gap-y-8">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis facilisis augue quis imperdiet
                            posuere. Fusce ut elit malesuada, ornare lorem non, lacinia mi. Etiam at urna ex. </p>
                        <div className="flex flex-col gap-y-5">
                            <p className="font-medium uppercase text-primary">Lorem ipsum dolor</p>
                            <hr className="border-primary-20" />
                            <p className="job-text overflow-hidden">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rhoncus neque sit amet
                                aliquam consectetur. Nunc consectetur suscipit magna, commodo faucibus ante gravida non.
                                Etiam cursus suscipit ante, id ultricies nulla condimentum sit amet. Suspendisse
                                laoreet tortor nec sapien placerat, non faucibus tellus vulputate.
                            </p>
                        </div>
                        <div className="flex flex-col gap-y-5">
                            <p className="font-medium uppercase text-primary">Lorem ipsum dolor</p>
                            <hr className="border-primary-20" />
                            <p className="job-text overflow-hidden">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rhoncus neque sit amet
                                aliquam consectetur. Nunc consectetur suscipit magna, commodo faucibus ante gravida non.
                                Etiam cursus suscipit ante, id ultricies nulla condimentum sit amet. Suspendisse
                                laoreet tortor nec sapien placerat, non faucibus tellus vulputate.
                            </p>
                        </div>
                    </div>
                    <div className="w-1/2">
                        <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                            <FormInput fieldName="Name" fieldData={setName} placeholder="Name" />
                            <FormInput fieldName="Email" fieldData={setEmail} placeholder="Email" />
                            <FormInput fieldName="Company name" fieldData={setCompanyName} placeholder="Company name" />
                            <FormInput fieldName="Link to offer" fieldData={setLinkToOffer} placeholder="Link to offer" />
                        </div>
                        <FormSelection/>
                        <div className="py-3">
                            <FormMessageBox placeholder="Give me more info about information" fieldName="Message" fieldData={setMessage} />
                        </div>
                        <button type="submit" className="shrink-0 bg-primary px-6 py-3 my-3 text-background cursor-pointer">
                            Send message →
                        </button>
                    </div>
                </div>
            </SectionTab>
        </div>
    )
}
