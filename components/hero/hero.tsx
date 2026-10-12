"use client"

import Image from "next/image";
import ocean from "@/public/wide-images/ocean.jpg";
import FormInput from "@/components/contact/form-input";
import {useState} from "react";


export default function Hero() {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [companyName, setCompanyName] = useState()
    const [linkToOffer, setLinkToOffer] = useState()
    const [message, setMessage] = useState()
    
    return(
        <div className="relative h-screen overflow-hidden">
            <Image src={ocean} alt="" fill className="object-cover" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-24 bg-gradient-to-b from-transparent to-background" />
            <div className="section-container relative z-20">
                <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
                <div className="grid-cols-2">
                    <FormInput fieldName="Name" fieldData={null} />
                </div>
            </div>
        </div>
    )
}