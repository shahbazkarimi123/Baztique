import './privacyPolicy.css';
function PrivacyPolicy(){
    return (
        <div className="main-content px-20 pb-6">
            {/* Privacy policy */}
            <h1 className="text-3xl">Privacy Policy</h1>
            <h2 className="text-[20px]">Effective Date: 25 December 2025</h2>
            <p className="pt-10">Your privacy is very important to us. This Privacy Policy explains what personal information we collect, how we use it, and what rights you have regarding your data when you use our website and services.</p>


            <hr className="my-10"></hr>

            {/*1 Information Collection  */}

            <h1 className="text-2xl">1. Information We Collect</h1>
            <p className="pt-5">When you interact with our website, we may collect the following information:</p>
            <ul className="list-disc pl-5 space-y-3 pt-2">
                <li><span className="font-semibold">Account Information:</span> Name, email address, and phone number when you sign up.</li>
                <li><span className="font-semibold">Order Information:</span> Delivery address and other details you provide while placing an order.</li>
                <li><span className="font-semibold">Payment Information:</span> We may collect payment-related details if required to process your order securely (though we do not store sensitive payment data ourselves; payments are processed by trusted third-party providers).</li>
                <li><span className="font-semibold">Automatically Collected Information:</span> Basic technical details like your IP address, browser type, and device type may be collected automatically for security and website performance.</li>
            </ul>
            <hr className="my-10"></hr>


            {/* Use Information */}
            <h2 className="text-2xl">2. How We Use Your Information</h2>
            <p>We use your information for purposes such as:</p>

        </div>
    );
}
export default PrivacyPolicy;