import InputField from "./small-components/InputField";
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ContactImage from "../assets/contactImage.jpeg";

export default function Contact() {
  return (
    <div className="flex-1 bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-700 p-6 md:p-8 overflow-y-auto">
      <div className="fade-in-left">
        <div className="flex flex-col lg:flex-row items-start justify-between items-center gap-8 text-white">
            <div className="w-full lg:w-1/2 bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 shadow-md">
            <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-red-500 to-yellow-400 bg-clip-text text-transparent">
                Let's Connect
            </h2>
            <form
                action="https://formsubmit.co/moatazahmed696@gmail.com"
                method="POST"
                className="space-y-4"
            >
                <InputField label="Name" type="text" name="name" />
                <InputField label="Email" type="email" name="email" />
                <InputField label="Message" isTextArea={true} name="message" />
                <button
                type="submit"
                className="w-full mt-3 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400 text-white py-3 px-5 rounded-lg shadow-md hover:shadow-indigo-500/20 transition-all duration-300 font-medium flex items-center justify-center gap-2"
                >
                Send Message <FontAwesomeIcon icon={faPaperPlane} />
                </button>
            </form>
            </div>
            <div className="w-full h-full lg:w-1/2 relative flex items-center">
                <img
                    src={ContactImage}
                    alt="PC fantasy Illustration"
                    className="w-full h-auto rounded-xl shadow-md object-cover"
                />
                    <div className="absolute bottom-4 left-4 z-10 bg-black/40 backdrop-blur-sm p-4 rounded-lg max-w-[300px] max-xl:left-1">
                    <h3 className="text-xl font-bold text-white">Ready to Start Your Project?</h3>
                    <p className="text-gray-300 mt-1 text-sm tex-wrap">
                        Whether you have a question or want to discuss potential collaboration.
                    </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
}
