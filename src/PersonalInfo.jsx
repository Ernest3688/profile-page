const PersonalInfo = () => {
  return (
    <div className=" bg-[#fdfdfd] px-20 py-8 ">
      <h1 className=" text-[48px] font-bold text-blue mb-6">Moniewise</h1>
      <span className=" text-[20px] text-darkYellow font-medium">
        Step 1 of 2
      </span>
      <div className="flex  gap-7 ">
        <div>
          <h2 className=" text-[36px] font-medium mb-6">
            Personal Information
          </h2>
          <form>
            <div className="flex flex-row gap-4 mb-4">
              <div className="flex flex-col gap-2">
                <label className=" text-[20px] font-medium">First Name</label>
                <input
                  type="text"
                  placeholder="Enter your first name"
                  className=" bg-profile-icon bg-no-repeat bg-[30px] bg-[#F0F0F0] px-[60px] w-[360px] border border-solid border-[#B4B4B4] rounded-[15px] h-[56px]"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className=" text-[20px] font-medium">Last Name</label>
                <input
                  type="text"
                  placeholder="Enter your last name"
                  className=" bg-profile-icon bg-no-repeat bg-[30px] bg-[#F0F0F0] px-[60px] w-[360px] border border-solid border-[#B4B4B4] rounded-[15px] h-[56px]"
                />
              </div>
            </div>

            <div className="flex flex-row gap-4 mb-4">
              <div className="flex flex-col gap-2">
                <label className=" text-[20px] font-medium">Phone Number</label>
                <input
                  type="tel"
                  placeholder="90000000000"
                  className=" bg-nigeria-flag bg-no-repeat bg-[23px] bg-[#F0F0F0] px-[65px] w-[360px] border border-solid border-[#B4B4B4] rounded-[15px] h-[56px]"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className=" text-[20px] font-medium">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="adebayo12@example.com"
                  className=" bg-sms-icon bg-no-repeat bg-[30px] bg-[#F0F0F0] px-[60px] w-[360px] border border-solid border-[#B4B4B4] rounded-[15px] h-[56px]"
                />
              </div>
            </div>

            <div className="flex flex-row gap-4 mb-4">
              <div className="flex flex-col gap-2">
                <label className=" text-[20px] font-medium">City</label>
                <select className=" bg-location-icon bg-no-repeat bg-[30px] bg-[#F0F0F0] px-[60px] w-[360px] border border-solid border-[#B4B4B4] rounded-[15px] h-[56px]">
                  <option>Please Select</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label className=" text-[20px] font-medium">Country</label>
                <select className=" bg-location-icon bg-no-repeat bg-[30px] bg-[#F0F0F0] px-[60px] w-[360px] border border-solid border-[#B4B4B4] rounded-[15px] h-[56px]">
                  <option>Nigeria</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className=" text-[20px] font-medium">
                Additional Information
              </label>
              <textarea
                placeholder="Enter details such as street number, apartment number, etc."
                className=" w-[744px] border border-solid border-[#B4B4B4] rounded-[15px] bg-[#F0F0F0] h-[174px] p-3 "
              />
            </div>

            <button className=" w-[744px] bg-blue text-white text-[24px] font-semibold rounded-[15px] py-5 mt-10">
              Continue
            </button>
          </form>
        </div>
        <div className="  flex flex-col justify-between ">
          <div>
            <p className=" text-[24px] font-medium">
              Customize your Moniewise journey
            </p>

            <div className="flex items-center gap-2">
              <p className=" text-[24px] font-bold border border-solid border-black w-[40px] h-[40px] rounded-[50%] text-center">
                1
              </p>
              <div>
                <p className=" text-[24px] text-orange font-medium">
                  Personal Information
                </p>
                <span className=" text-[20px] text-[#726C6C] font-light">
                  Complete personal details for a better experience
                </span>
              </div>
            </div>
            <div className=" h-[92px] w-1 border-solid border border-l-black border-transparent ml-5 mb-1"></div>
            <div className="flex items-center gap-2">
              <p className=" text-[24px] text-[#B5B3B3] font-bold border border-solid border-[#B5B3B3] w-[40px] h-[40px] rounded-[50%] text-center">
                2
              </p>
              <div>
                <p className=" text-[24px] text-[#B5B3B3] font-light">
                  Profile Settings
                </p>
                <span className=" text-[20px] text-[#B5B3B3] font-light">
                  Personalize your profile for a complete experience
                </span>
              </div>
            </div>
          </div>
          <div className=" px-10">
            <p className="text-[24px] font-medium">Existing Account?</p>
            <span className="text-[20px] font-light">
              Do you have an existing Moniewise account?
            </span>
            <button className="w-[444px] border border-solid border-blue text-blue py-4 rounded-[16px] text-[20px] font-medium my-8">
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
