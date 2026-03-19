addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  const url = new URL(request.url);

  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  if (request.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  if (url.pathname === '/api/hello') {
    return new Response(JSON.stringify({ message: 'Hello World' }), {
      headers: { 'Content-Type': 'application/json', ...corsHeaders },
    });
  }

  if (url.pathname === '/api/goodbye') {
    return new Response(JSON.stringify({ message: 'Tschüss!' }), {
      headers: { 'Content-Type': 'application/json', ...corsHeaders },
    });
  }

  if (url.pathname === '/health') {
    return new Response(JSON.stringify({ status: 'ok' }), {
      headers: { 'Content-Type': 'application/json' },
    });
  }

  return new Response('Not Found', { status: 404 });
}
