"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {SignedIn, SignedOut, SignIn, SignInButton, UserButton} from "@clerk/nextjs";
import { DarkModeToggle } from "./DarkModeToggle";
import { BookOpen, Code2, Laptop, Menu, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet"
import { SearchInput } from "./Searchinput";



const navItems = [
  {label: "Cursos", href: "/cursos", icon:BookOpen},
  {label: "Retos", href: "/retos", icon:Code2, badge: "Muy pronto"},
  {label: "Proyectos", href: "/proyectos", icon:Laptop},
]

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background backdrop-blur">
      {/*Contenedor*/}
      <div className="container flex h-16 items-center justify-between px-4">
        {/*Logo y navegación*/}
        <div className="flex items-center gap-2">
         {/*Logo*/}
         <Link href="/" className="flex items-center gap-2">
         <div className="flex h-8 w-8 items-center justify-center rounded bg-primary text-primary-foreground">
          <Code2 className="h-5 w-5" />
        </div>
        <span className="text-xl font-bold sm:block hidden">
          Academia ADSO
        </span>
        <span className="rounded-md bg-muted px-1.5 py-0.5 text-xs font-medium text-muted-foreground">
         BETA  
        </span>
       </Link>
       
       {/*Navegación*/}
       <nav className="hidden md:flex md:gap-6">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={cn(
                "flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-foreground/80",
                pathname === item.href ? "text-foreground" : "text-foreground/60"
              )}
            >
              {item.icon && <item.icon className="h-4 w-4" />}
              {item.label}
              {item.badge && (
                <span className="ml-1 rounded bg-green-700 px-1.5 py-0.5 text-[10px] font-medium text-white">
                  {item.badge}
                </span>
              )}
            </Link>
          ))}
       </nav>
       </div>
       {/*Control modo oscuro*/}
       <div className="flex items-center gap-4">
        {/*Barra de búsqueda*/}
        <SearchInput />
        <DarkModeToggle/>
        {/*Boton inicio de sesión*/}
        <SignedIn>
          <UserButton />
        </SignedIn>

        <SignedOut>
          <SignInButton mode="modal">
            <Button variant="outline" className="hidden md:inline-flex">Iniciar sesión</Button>
          </SignInButton>
        </SignedOut>

        {/*Navegación móvil*/}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Abrir Menú</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px]">
            <nav className="flex flex-col gap-4 p-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-foreground/80",
                    pathname === item.href ? "text-foreground" : "text-foreground/60"
                  )}
                
                >
                  <item.icon className="h-4 w-4"/>
                  {item.label}
                </Link>
              ))}
            </nav>
            {/* Boton de inicio de sesión movil */}

            <SignedOut>
              <SignInButton mode="modal">
                <Button variant="outline" className="w-full mt-4">Iniciar sesión</Button>
              </SignInButton>
            </SignedOut>
          </SheetContent>
        </Sheet>
        </div>
     </div>
   </header>
  );
}
