const routers = [
  {
    source: "/",
    destination: "/",
  },
  {
    source: "/Infrastructure",
    destination: "/co-so-vat-chat",
  },
  {
    source: "/Infrastructure/[detail]",
    destination: "/co-so-vat-chat/[detail]",
  },
];

module.exports = routers;
