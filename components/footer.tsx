import { SiClaude, SiOpenai } from "react-icons/si";
import { Button } from "./ui/button";
import { Blockquote, Muted } from "./ui/typography";
import Image from "next/image";
import { trackEvent } from "@/lib/analytics";

export function Footer(){
  return (
    <div className="mx-[10vw] pt-20 pb-100 flex flex-col items-center">
      <AskAi/>
      <Blockquote className="text-center pt-6">per aspera ad astra</Blockquote>
      <Muted className="text-center pt-1">Copyright © 2026</Muted>
    </div>
  )
}

function AskAi(){
  const PROMPT ="As a potential employer, I want to concretely get to know Jakob (https://www.jakobfrenzel.com/). Give me an overview about this person. Use https://www.jakobfrenzel.com/sitemap.xml to search the site for information. You can also check his GitHub (https://github.com/jakobgif) and LinkedIn (https://www.linkedin.com/in/frenzel-jakob) profile.";

  const queryAi = (url: string, provider: string) => {
    const query = `${url}${encodeURIComponent(PROMPT)}`;
    trackEvent("ai_summary_click", { provider });
    window.open(query, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="flex-col">
      <p className="pb-1 text-center">Request an AI summary about me.</p>
      <div className="flex flex-row justify-center gap-1">
        <Button variant="ghost" className="rounded-full" size="icon-lg" onClick={() => queryAi("https://chat.openai.com/?q=", "chatgpt")} aria-label="Ask ChatGPT about me"><SiOpenai className="size-7"/></Button>
        <Button variant="ghost" className="rounded-full" size="icon-lg" onClick={() => queryAi("https://claude.ai/new?q=", "claude")} aria-label="Ask Claude about me"><SiClaude className="size-7"/></Button>
        <Button variant="ghost" className="rounded-full" size="icon-lg" onClick={() => queryAi("https://grok.com/?q=", "grok")} aria-label="Ask Grok about me"><Image src="/grok.svg" width={28} height={28} alt="Grok" className="dark:invert"/></Button>
      </div>
    </div>
  )
}