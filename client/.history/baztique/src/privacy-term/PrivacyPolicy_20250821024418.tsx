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
            <p className="pt-5">We use your information for purposes such as:</p>
            <ul className="list-disc pl-5 space-y-3 pt-2">
                <li>Creating and managing your user account.</li>
                <li>Processing and delivering your orders.</li>
                <li>Sending order updates, confirmations, or important notifications.</li>
                <li>Providing customer support when needed.</li>
                <li>Improving the functionality and user experience of our website.</li>
            </ul>
            <hr className="my-10"></hr>

            {/* Sharing info */}
            <h2 className="text-2xl">3. Sharing of Information</h2>
            <p className="pt-5">We respect your privacy. We do not sell or rent your personal information to third parties.</p>
            <p className="pt-5">We may share your information only in these cases:</p>
            <ul className="list-disc pl-5 space-y-3 pt-2">
                <li><span className="font-semibold">Service Providers:</span> With trusted third-party providers (e.g., payment gateways, delivery partners) who help us operate the website and fulfill your orders.</li>
                <li><span className="font-semibold">Legal Requirements:</span> If required by law, regulation, or legal process.</li>
                <li><span className="font-semibold">Business Transfers:</span> In case of a merger, acquisition, or sale of assets, your information may be transferred as part of the business assets.</li>
            </ul>
            <hr className="my-10"></hr>

            {/* Data Security */}
            <h2 className="text-2xl">4. Data Security</h2>
            <p className="pt-5">We take appropriate technical and organizational measures to protect your personal information against unauthorized access, loss, or misuse. However, please understand that no method of data transmission or storage over the internet is 100% secure.</p>

            <hr className="my-10"></hr>

            {/* Rights and Choices */}
            <h2 className="text-2xl">5. Your Rights and Choices</h2>
            <p className="pt-5">You have the right to:</p>
            <ul className="list-disc pl-5 space-y-3 pt-2">
                <li>Access and update your account details.</li>
                <li>Request correction of inaccurate information.</li>
                <li>Request deletion of your account and associated data (except where retention is required by law).</li>
                <li>Opt out of receiving non-essential communications.</li>
            </ul>
            <p>To exercise these rights, please contact us using the details below.</p>

            <hr className=""></hr>

        </div>
    );
}
export default PrivacyPolicy;