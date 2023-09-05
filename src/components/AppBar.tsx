export function AppBar({ children }: any) {
    return <div className="h-16 fixed px-4 bg-slate-50 right-0 left-0 top-0 drop-shadow-md flex items-center">
        <div className="flex flex-row">
            <p>Home</p>
        </div>
        <div className="flex-1"></div>
        <div className="flex flex-row">
            {children}
        </div>
    </div>
}
