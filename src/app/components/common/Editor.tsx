
export default function Editor() {
  return (
        <div className="relative overflow-hidden rounded-[14px] border-[0.5px] border-borderStrong bg-card">
                        {/* -- Title bar -- */}
                        <div className="flex items-center gap-3 border-b-[0.5px] border-border bg-card2 px-4 py-3">
                        <div className="flex gap-1.5">
                            <div className="h-[11px] w-[11px] rounded-full bg-[#ff5f57]"></div>
                            <div className="h-[11px] w-[11px] rounded-full bg-[#ffbd2e]"></div>
                            <div className="h-[11px] w-[11px] rounded-full bg-[#28c840]"></div>
                        </div>
                        <div className="ml-2 flex gap-1">
                            <div className="cursor-pointer rounded-[5px] border-[0.5px] border-border bg-surface px-3 py-1 font-mono text-[11.5px] text-secondaryText transition-all duration-150">gurwinder.ts</div>
                            <div className="cursor-pointer rounded-[5px] border-[0.5px] border-transparent px-3 py-1 font-mono text-[11.5px] text-mutedText transition-all duration-150">portfolio.tsx</div>
                        </div>
                        </div>

                        {/* <!-- Code --> */}
                        <div className="flex">
                        <div className="min-w-[36px] select-none border-r-[0.5px] border-border px-3 py-4 pl-4 text-right font-mono text-xs leading-[22px] text-mutedText">
                            1<br />2<br />3<br />4<br />5<br />6<br />7<br />8<br />9<br />10<br />11<br />12<br />13<br />14<br />15<br />16<br />17
                        </div>
                        <div className="flex-1 overflow-x-auto py-4 pl-[14px] pr-4 font-mono text-[12.5px] leading-[22px]">
                                <div className="flex items-baseline whitespace-nowrap gap-1">
                                    <span className="text-syntaxKeyword">interface </span>
                                    <span className="text-syntaxType">Developer</span>
                                    <span className="text-secondaryText"> {"{"}</span>
                                </div>

                                <div className="flex items-baseline whitespace-nowrap gap-1">
                                    &nbsp;&nbsp;
                                    <span className="text-syntaxVariable">name</span>
                                    <span className="text-secondaryText">: </span>
                                    <span className="text-syntaxType">string</span>
                                    <span className="text-secondaryText">;</span>
                                </div>

                                <div className="flex items-baseline whitespace-nowrap gap-1">
                                    &nbsp;&nbsp;
                                    <span className="text-syntaxVariable">role</span>
                                    <span className="text-secondaryText">: </span>
                                    <span className="text-syntaxType">string</span>
                                    <span className="text-secondaryText">;</span>
                                </div>

                                <div className="flex items-baseline whitespace-nowrap gap-1">
                                    &nbsp;&nbsp;
                                    <span className="text-syntaxVariable">stack</span>
                                    <span className="text-secondaryText">: </span>
                                    <span className="text-syntaxType">string</span>
                                    <span className="text-secondaryText">[];</span>
                                </div>

                                <div className="flex items-baseline whitespace-nowrap gap-1">
                                    &nbsp;&nbsp;
                                    <span className="text-syntaxVariable">available</span>
                                    <span className="text-secondaryText">: </span>
                                    <span className="text-syntaxType">boolean</span>
                                    <span className="text-secondaryText">;</span>
                                </div>

                                <div className="flex items-baseline whitespace-nowrap gap-1">
                                    <span className="text-secondaryText">{"}"}</span>
                                </div>

                                <div className="flex items-baseline whitespace-nowrap gap-1">&nbsp;</div>

                                <div className="flex items-baseline whitespace-nowrap gap-1">
                                    <span className="text-syntaxKeyword">const </span>
                                    <span className="text-syntaxVariable">gurwinder</span>
                                    <span className="text-secondaryText">: </span>
                                    <span className="text-syntaxType">Developer</span>
                                    <span className="text-secondaryText"> = {"{"}</span>
                                </div>

                                <div className="flex items-baseline whitespace-nowrap gap-1">
                                    &nbsp;&nbsp;
                                    <span className="text-syntaxVariable">name</span>
                                    <span className="text-secondaryText">: </span>
                                    <span className="text-syntaxString">{'"'}Gurwinder Singh{'"'}</span>
                                    <span className="text-secondaryText">,</span>
                                </div>

                                <div className="flex items-baseline whitespace-nowrap gap-1">
                                    &nbsp;&nbsp;
                                    <span className="text-syntaxVariable">role</span>
                                    <span className="text-secondaryText">: </span>
                                    <span className="text-syntaxString">{'"'}Frontend Engineer{'"'}</span>
                                    <span className="text-secondaryText">,</span>
                                </div>

                                <div className="flex items-baseline whitespace-nowrap gap-1">
                                    &nbsp;&nbsp;
                                    <span className="text-syntaxVariable">stack</span>
                                    <span className="text-secondaryText">: [</span>
                                    <span className="text-syntaxString">{'"'}React{'"'}</span>
                                    <span className="text-secondaryText">, </span>
                                    <span className="text-syntaxString">{'"'}Next.js{'"'}</span>
                                    <span className="text-secondaryText">,</span>
                                </div>

                                <div className="flex items-baseline whitespace-nowrap gap-1">
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <span className="text-syntaxString">{'"'}TypeScript{'"'}</span>
                                    <span className="text-secondaryText">, </span>
                                    <span className="text-syntaxString">{'"'}Redux{'"'}</span>
                                    <span className="text-secondaryText">],</span>
                                </div>

                                <div className="flex items-baseline whitespace-nowrap gap-1">
                                    &nbsp;&nbsp;
                                    <span className="text-syntaxVariable">available</span>
                                    <span className="text-secondaryText">: </span>
                                    <span className="text-syntaxKeyword">true</span>
                                    <span className="text-secondaryText">,</span>
                                </div>

                                <div className="flex items-baseline whitespace-nowrap gap-1">
                                    <span className="text-secondaryText">{"};"}</span>
                                </div>

                                <div className="flex items-baseline whitespace-nowrap gap-1">&nbsp;</div>

                                <div className="flex items-baseline whitespace-nowrap gap-1">
                                    <span className="italic text-mutedText">
                                        {'// Let\'s build something great'}
                                    </span>
                                </div>

                                <div className="flex items-baseline whitespace-nowrap gap-1">
                                    <span className="text-syntaxKeyword">export</span>
                                    <span className="text-syntaxKeyword"> default </span>
                                    <span className="text-syntaxVariable">gurwinder</span>
                                    <span className="text-secondaryText">;</span>
                                    <span className="inline-block w-[2px] h-3.5 bg-[var(--accent)] ml-[1px] align-middle animate-[blink_1.1s_step-start_infinite]"></span>
                                </div>
                            </div>
                        </div>

                        {/* // -- Terminal -- */}
                        <div className="border-t-[0.5px] border-border bg-card2">
                        <div className="flex items-center justify-between border-b-[0.5px] border-border px-4 py-2">
                            <span className="font-mono text-[11px] text-mutedText tracking-[0.5px]">TERMINAL</span>
                            <div className="flex items-center gap-[5px] text-[11px] font-mono text-green">
                                <span className="w-[5px] h-[5px] rounded-full bg-green"></span>
                                npm run dev
                            </div>
                        </div>
                        <div className="px-4 py-2 font-mono text-[11.5px] leading-[20px]">
                            <div className="flex gap-2"><span className="text-accent">▶</span><span className="text-primaryText"> npm run build</span></div>
                            <div className="flex gap-2"><span className="text-green ml-0">✓ Compiled successfully in 1.2s</span></div>
                            <div className="flex gap-2"><span className="text-mutedText ml-0">  Route (app)           Size</span></div>
                            <div className="flex gap-2"><span className="text-mutedText ml-0">  ○ /                   4.2 kB</span></div>
                            <div className="flex gap-2"><span className="text-green ml-0">✓ Ready on localhost:3000</span></div>
                        </div>
                        </div>
                    </div>
  )
}
