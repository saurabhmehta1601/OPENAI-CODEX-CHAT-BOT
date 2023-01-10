import React, { ComponentPropsWithoutRef } from 'react'

const Header = (props: ComponentPropsWithoutRef<"header">) => {
    return (
        <header className="p-4 flex justify-between " {...props}>
            <h3 className="text-3xl text-white hover:cursor-pointer">CODEX BUDDY</h3>
            <span className="hover:cursor-pointer rounded-md bg-gray-500">
                <a href="https://github.com/saurabhmehta1601/OPENAI-CODEX-CHAT-BOT">
                    <img src="/assets/github.png" alt="github" />
                </a>
            </span>
        </header>
    )
}

export default Header