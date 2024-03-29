import Logo from "@/components/features/logo/logo";

export default function NotFound() {
  return (
    <div className="  flex min-h-screen after:bg-black flex-col items-center justify-center font-extrabold text-black">
      <h2 className="nexus7:text-7xl mt-10 rounded-3xl border-2 border-black  bg-white p-3 text-4xl">
        ERROR 404
        <hr className="hrTop" />
      </h2>
      <h2 className="nexus7:text-4xl mb-16 mt-4 rounded-3xl border-2 border-black bg-white p-3 text-2xl">
        PAGE NOT FOUND <hr className="hrTop" />
      </h2>{" "}
      <div className="  bg-orange-200 rounded-3xl">
        <Logo />
      </div>
    </div>
  );
}
