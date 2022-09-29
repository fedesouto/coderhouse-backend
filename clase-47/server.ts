import { serve } from "https://deno.land/std/http/mod.ts"

const handler = (req: Request): Response => {
    const url = new URL(req.url)
    const frase = url.searchParams.get('frase') || ''
    const response = frase.split(' ').reverse().join(' ')
    return new Response(response)
}
serve(handler)