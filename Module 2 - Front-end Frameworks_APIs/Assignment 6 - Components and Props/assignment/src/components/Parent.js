import React from 'react';
import Child from './Child.js';

class Parent extends React.Component {

    setChildParameters (heading, headingurl, title1, title1url, title2, title2url, title3, title3url, viewAll = "View all questions") {
        return(<>
            <div className="children">
                <Child heading={heading} link={headingurl}></Child> <br/>
                <Child title1={title1} link={title1url}></Child>
                <Child title2={title2} link={title2url}></Child>
                <Child title3={title3} link={title3url}></Child>
                <Child viewAll={viewAll} link={headingurl}></Child>
            </div>
        </>)
    }

    render() {
        return(<div id="parent">
            <div id="helpCenter">Help Center</div>
            {this.setChildParameters("General", "https://faq.whatsapp.com/general/", "About forwarding limits", "https://faq.whatsapp.com/general/chats/about-forwarding-limits/", "How to update WhatsApp", "https://faq.whatsapp.com/general/download-and-installation/how-to-update-whatsapp/", "How to change group privacy settings", "https://faq.whatsapp.com/general/security-and-privacy/how-to-change-group-privacy-settings/")}
            {this.setChildParameters("Android", "https://faq.whatsapp.com/android/", "Verifying your number", "https://faq.whatsapp.com/android/verification/verifying-your-number/", "How to restore your chat history", "https://faq.whatsapp.com/android/chats/how-to-restore-your-chat-history/", "How to manage your notifications", "https://faq.whatsapp.com/android/chats/how-to-manage-your-notifications/")}
            {this.setChildParameters("iPhone", "https://faq.whatsapp.com/iphone/", "How to restore your chat history", "https://faq.whatsapp.com/iphone/chats/how-to-restore-your-chat-history/", "How to manage your notifications", "https://faq.whatsapp.com/iphone/troubleshooting/how-to-manage-your-notifications/", "How to use status", "https://faq.whatsapp.com/iphone/status/how-to-use-status/")}
            {this.setChildParameters("Web and Desktop", "https://faq.whatsapp.com/web/", "About WhatsApp Web and Desktop", "https://faq.whatsapp.com/web/download-and-installation/about-whatsapp-web-and-desktop/", "How to log in or out", "https://faq.whatsapp.com/web/download-and-installation/how-to-log-in-or-out/", "How to manage your notifications", "https://faq.whatsapp.com/web/chats/how-to-manage-your-notifications/")}
            {this.setChildParameters("KaiOS", "https://faq.whatsapp.com/kaios/", "How to verify your phone number", "https://faq.whatsapp.com/kaios/verification/how-to-verify-your-phone-number/", "How to edit your profile", "https://faq.whatsapp.com/kaios/account-and-profile/how-to-edit-your-profile/", "How to send media, contacts, or location", "https://faq.whatsapp.com/kaios/chats/how-to-send-media-contacts-or-location/")}
            {this.setChildParameters("WhatsApp Business for Android", "https://faq.whatsapp.com/smba/", "WhatsApp business products", "https://faq.whatsapp.com/general/whatsapp-business-api/whatsapp-business-products/", "How to download the WhatsApp Business app", "https://faq.whatsapp.com/smba/download-and-installation/how-to-download-the-whatsapp-business-app/", "How to edit your business profile", "https://faq.whatsapp.com/smba/account-and-profile/how-to-edit-your-business-profile/")}
            {this.setChildParameters("WhatsApp Business for iPhone", "https://faq.whatsapp.com/smbi/", "WhatsApp business products", "https://faq.whatsapp.com/general/whatsapp-business-api/whatsapp-business-products/", "How to download the WhatsApp Business app", "https://faq.whatsapp.com/smbi/download-and-installation/how-to-download-the-whatsapp-business-app/", "How to edit your business profile", "https://faq.whatsapp.com/smbi/account-and-profile/how-to-edit-your-business-profile/")}
        </div>)
    }
}

export default Parent;