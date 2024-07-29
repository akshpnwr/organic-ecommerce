const ContactUs = () => {
  return (
    <section className="">
      {/* form */}
      <div className="container px-2 my-10 md:my-14 md:px-40">
        <div className="block rounded-lg px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  md:py-16 md:px-12 border border-gray-300">
          <div className="flex flex-wrap">
            <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6">
              <form>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <input
                    type="text"
                    className="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none "
                    id="exampleInput90"
                  />
                  <label
                    className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none "
                    htmlFor="exampleInput90"
                  >
                    Name
                  </label>
                </div>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <input
                    type="email"
                    className="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none "
                    id="exampleInput91"
                  />
                  <label
                    className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none "
                    htmlFor="exampleInput91"
                  >
                    Email address
                  </label>
                </div>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <textarea
                    className="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none "
                    id="exampleFormControlTextarea1"
                    rows={3}
                  ></textarea>
                  <label
                    htmlFor="exampleFormControlTextarea1"
                    className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none "
                  >
                    Message
                  </label>
                </div>
                <div className="mb-6 inline-block min-h-[1.5rem] justify-center pl-[1.5rem] md:flex">
                  <input
                    className="appearance-none border border-gray-500 rounded-sm w-4 h-4 relative right-2 top-[0.15rem] checked:appearance-auto checked:p-2"
                    type="checkbox"
                    value=""
                    id="exampleCheck96"
                  />
                  <label
                    className="inline-block pl-[0.15rem] hover:cursor-pointer"
                    htmlFor="exampleCheck96"
                  >
                    Send me a copy of this message
                  </label>
                </div>
                <button
                  type="button"
                  className="mb-6 w-full rounded bg-green-600 text-white px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal   lg:mb-0"
                >
                  Send
                </button>
              </form>
            </div>
            <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
              <div className="flex flex-wrap">
                <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12">
                  <div className="flex items-start">
                    <div className="shrink-0">
                      <div className="inline-block rounded-md bg-green-600 text-white p-4 text-primary">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          className="h-6 w-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-6 grow">
                      <p className="mb-2 font-bold ">Technical support</p>
                      <p className="text-sm text-neutral-500">
                        example@gmail.com
                      </p>
                      <p className="text-sm text-neutral-500">1-600-890-4567</p>
                    </div>
                  </div>
                </div>
                <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12">
                  <div className="flex items-start">
                    <div className="srink-0">
                      <div className="inline-block rounded-md bg-green-600 text-white p-4 text-primary">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          className="w-7 h-7"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-6 grow">
                      <p className="mb-2 font-bold ">Address</p>
                      <p className="text-sm text-neutral-500">
                        abcd, <br />
                        xyz <br />
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12 md:px-3 lg:mb-12 lg:w-full lg:px-6 xl:w-6/12">
                  <div className="align-start flex">
                    <div className="shrink-0">
                      <div className="inline-block rounded-md bg-green-600 text-white p-4 text-primary">
                        <svg
                          fill="#fff"
                          viewBox="0 0 1024 1024"
                          xmlns="http://www.w3.org/2000/svg"
                          stroke="#fff"
                          className="w-6 h-6"
                          strokeWidth="5.5"
                        >
                          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                          <g
                            id="SVGRepo_tracerCarrier"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            stroke="#CCCCCC"
                            strokeWidth="5"
                          ></g>
                          <g id="SVGRepo_iconCarrier">
                            <path d="M422.28 220.416h455.803c16.962 0 30.72 13.758 30.72 30.72v624.128c0 16.962-13.758 30.72-30.72 30.72h-734.72c-16.968 0-30.72-13.754-30.72-30.72V251.136c0-16.966 13.752-30.72 30.72-30.72h54.272v-40.96h-54.272c-39.591 0-71.68 32.094-71.68 71.68v624.128c0 39.586 32.089 71.68 71.68 71.68h734.72c39.583 0 71.68-32.097 71.68-71.68V251.136c0-39.583-32.097-71.68-71.68-71.68H422.28v40.96z"></path>
                            <path d="M370.944 802.438c16.962 0 30.72-13.758 30.72-30.72V143.361c0-16.968-13.754-30.72-30.72-30.72h-120.32c-16.966 0-30.72 13.752-30.72 30.72v628.357c0 16.962 13.758 30.72 30.72 30.72h120.32zm0 40.96h-120.32c-39.583 0-71.68-32.097-71.68-71.68V143.361c0-39.591 32.094-71.68 71.68-71.68h120.32c39.586 0 71.68 32.089 71.68 71.68v628.357c0 39.583-32.097 71.68-71.68 71.68zm422.391-458.374c5.657 0 10.24-4.583 10.24-10.24v-41.472c0-5.657-4.583-10.24-10.24-10.24H558.184a10.238 10.238 0 00-10.24 10.24v41.472c0 5.657 4.583 10.24 10.24 10.24h235.151zm0 40.96H558.184c-28.278 0-51.2-22.922-51.2-51.2v-41.472c0-28.278 22.922-51.2 51.2-51.2h235.151c28.278 0 51.2 22.922 51.2 51.2v41.472c0 28.278-22.922 51.2-51.2 51.2zm-194.889 81.92c0 14.141-11.459 25.6-25.6 25.6s-25.6-11.459-25.6-25.6c0-14.141 11.459-25.6 25.6-25.6s25.6 11.459 25.6 25.6zm102.4 0c0 14.141-11.459 25.6-25.6 25.6s-25.6-11.459-25.6-25.6c0-14.141 11.459-25.6 25.6-25.6s25.6 11.459 25.6 25.6zm103.424 0c0 14.141-11.459 25.6-25.6 25.6s-25.6-11.459-25.6-25.6c0-14.141 11.459-25.6 25.6-25.6s25.6 11.459 25.6 25.6zM598.446 612.352c0 14.141-11.459 25.6-25.6 25.6s-25.6-11.459-25.6-25.6c0-14.141 11.459-25.6 25.6-25.6s25.6 11.459 25.6 25.6zm102.4 0c0 14.141-11.459 25.6-25.6 25.6s-25.6-11.459-25.6-25.6c0-14.141 11.459-25.6 25.6-25.6s25.6 11.459 25.6 25.6zm103.424 0c0 14.141-11.459 25.6-25.6 25.6s-25.6-11.459-25.6-25.6c0-14.141 11.459-25.6 25.6-25.6s25.6 11.459 25.6 25.6zm-205.824 102.4c0 14.141-11.459 25.6-25.6 25.6s-25.6-11.459-25.6-25.6c0-14.141 11.459-25.6 25.6-25.6s25.6 11.459 25.6 25.6zm102.4 0c0 14.141-11.459 25.6-25.6 25.6s-25.6-11.459-25.6-25.6c0-14.141 11.459-25.6 25.6-25.6s25.6 11.459 25.6 25.6zm103.424 0c0 14.141-11.459 25.6-25.6 25.6s-25.6-11.459-25.6-25.6c0-14.141 11.459-25.6 25.6-25.6s25.6 11.459 25.6 25.6z"></path>
                          </g>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-6 grow">
                      <p className="mb-2 font-bold ">Land Line</p>
                      <p className="text-neutral-500"> (0421) 431 2030</p>
                    </div>
                  </div>
                </div>
                <div className="w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:mb-12 xl:w-6/12">
                  <div className="align-start flex">
                    <div className="shrink-0">
                      <div className="inline-block rounded-md bg-green-600 text-white p-4 text-primary">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-6 grow">
                      <p className="mb-2 font-bold ">Mobile</p>
                      <p className="text-neutral-500"> +91 123456789</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* map */}
      <div
        id="map"
        className="h-[300px] overflow-hidden bg-cover bg-[50%] bg-no-repeat"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11672.945750644447!2d-122.42107853750231!3d37.7730507907087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858070cc2fbd55%3A0xa71491d736f62d5c!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1619524992238!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
};

export default ContactUs;
