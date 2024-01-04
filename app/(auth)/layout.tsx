const AuthLayout = ({ children }: any) => {
  return (
    <div className="flex flex-col gap-y-4">
      <nav className="bg-teal-500 text-white  gap-x-5"> This is Auth navbar</nav>
      {children}
    </div>
  )
}

export default AuthLayout