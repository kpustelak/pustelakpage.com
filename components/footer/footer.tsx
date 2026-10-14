import FooterBlock from "@/components/footer/footer-block";

export default function Footer(){
    return (
        <div>
            <div className="flex mb-40 w-screen border-t border-b border-primary ">
                <FooterBlock />
                <div className="w-1/3" ></div>
                <FooterBlock />
            </div>
        </div>
    )
}