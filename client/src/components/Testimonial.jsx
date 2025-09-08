export default function Testimonial() {
    return (
        <div className='px-4 sm:px-20 xl:px-32 py-24'>
            <div className='text-center'>
                <h2 className='text-slate-700 text-[42px] font-semibold'>Loved by Creators</h2>
                {/* <p className='text-gray-500 max-w-lg mx-auto'>
                    Don't just take our word for it. Here's what our users are saying.
                </p> */}
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 pt-25">
                {/* Testimonial 1 */}
                <div className="text-sm w-80 border border-gray-200 pb-6 rounded-lg bg-white 
                shadow-[0px_4px_15px_0px] shadow-black/5 
                transition-all duration-300 ease-in-out 
                hover:-translate-y-2 hover:shadow-xl">
                    <div className="flex flex-col items-center px-5 py-4 relative">
                        <img className="h-24 w-24 absolute -top-14 rounded-full transition-transform duration-300 hover:scale-110"
                            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200"
                            alt="userImage1" />
                        <div className="pt-8 text-center">
                            <h1 className="text-lg font-medium text-gray-800">Donald Jackman</h1>
                            <p className="text-gray-800/80">Content Creator</p>
                        </div>
                    </div>
                    <p className="text-gray-500 px-6 text-center">
                        I've been using imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.
                    </p>
                </div>

                {/* Testimonial 2 */}
                <div className="text-sm w-80 border border-gray-200 pb-6 rounded-lg bg-white 
                shadow-[0px_4px_15px_0px] shadow-black/5 
                transition-all duration-300 ease-in-out 
                hover:-translate-y-2 hover:shadow-xl">
                    <div className="flex flex-col items-center px-5 py-4 relative">
                        <img className="h-24 w-24 absolute -top-14 rounded-full transition-transform duration-300 hover:scale-110"
                            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200"
                            alt="userImage2" />
                        <div className="pt-8 text-center">
                            <h1 className="text-lg font-medium text-gray-800">Richard Nelson</h1>
                            <p className="text-gray-800/80">Instagram Influencer</p>
                        </div>
                    </div>
                    <p className="text-gray-500 px-6 text-center">
                        I've been using imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.
                    </p>
                </div>

                {/* Testimonial 3 */}
                <div className="text-sm w-80 border border-gray-200 pb-6 rounded-lg bg-white 
                shadow-[0px_4px_15px_0px] shadow-black/5 
                transition-all duration-300 ease-in-out 
                hover:-translate-y-2 hover:shadow-xl">
                    <div className="flex flex-col items-center px-5 py-4 relative">
                        <img className="h-24 w-24 absolute -top-14 rounded-full transition-transform duration-300 hover:scale-110"
                            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop"
                            alt="userImage3" />
                        <div className="pt-8 text-center">
                            <h1 className="text-lg font-medium text-gray-800">James Washington</h1>
                            <p className="text-gray-800/80">Marketing Manager</p>
                        </div>
                    </div>
                    <p className="text-gray-500 px-6 text-center">
                        I've been using imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.
                    </p>
                </div>
            </div>
        </div>
    );
};
