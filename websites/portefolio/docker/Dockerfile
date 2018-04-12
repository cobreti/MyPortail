FROM cobreti/linux_netcore_env:1.0

RUN apt-get update && apt-get install curl
RUN curl -sL https://deb.nodesource.com/setup_9.x | bash
RUN apt-get update && apt-get install -y nodejs

COPY bin/Release/netcoreapp2.0/publish /var/www/portefolio

WORKDIR /var/www/portefolio

ENTRYPOINT ["dotnet", "portefolio.dll"]
