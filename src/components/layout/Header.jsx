import { Bell, Moon, UserCircle } from "lucide-react";
import { useEffect, useState } from "react";

import { checkHealth } from "../../services/healthService";

export default function Header() {

    const [online, setOnline] = useState(false);

    useEffect(() => {

        const loadHealth = async () => {

            try {

                await checkHealth();
                setOnline(true);

            } catch {

                setOnline(false);

            }

        };

        loadHealth();

        const interval = setInterval(loadHealth, 30000);

        return () => clearInterval(interval);

    }, []);

    return (

        <header className="border-b border-slate-800 bg-slate-950 px-4 py-4 md:px-6 lg:px-8">

            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

                <div>

                    <h2 className="text-xl font-bold md:text-2xl">
                        Dashboard
                    </h2>

                    <p className="text-sm text-slate-400">
                        Enterprise AI Workspace
                    </p>

                </div>

                <div className="flex flex-wrap items-center gap-3">

                    <div className="flex items-center gap-2 rounded-full border border-slate-700 px-3 py-2">

                        <span
                            className={`h-2 w-2 rounded-full ${
                                online ? "bg-green-500" : "bg-red-500"
                            }`}
                        />

                        <span className="hidden text-sm sm:inline">
                            {online ? "Backend Online" : "Backend Offline"}
                        </span>

                    </div>

                    <button className="rounded-xl border border-slate-700 p-2 transition hover:bg-slate-800">
                        <Moon size={18} />
                    </button>

                    <button className="rounded-xl border border-slate-700 p-2 transition hover:bg-slate-800">
                        <Bell size={18} />
                    </button>

                    <button className="rounded-full">
                        <UserCircle size={34} />
                    </button>

                </div>

            </div>

        </header>

    );

}