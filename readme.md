Listenr is a silly, simple Node.js app that listens over http on all ports.

This is useful for determining open ports to the Internet through enterprise network firewalls.

You can change the listening ports to any range you'd like. Be aware that there might be other things listening on TCP ports. Try to go with a minimal server/VM/instance.

From the client side, you can use curl or Powershell's Invoke-WebRequest to loop through the ports.

