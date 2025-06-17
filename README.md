# abort-test

## Firing after abort

1. `curl -v http://localhost:5173/abort`
2.  Wait for connection to establish
3. <kbd>Ctrl</kbd> + <kbd>C</kbd>
4. AbortSignal should fire

## Not firing after request fulfillment 

1. `curl http://localhost:5173/abort`
2. Wait 3 seconds
3. AbortSignal should **NOT** fire


