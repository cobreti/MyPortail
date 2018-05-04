FROM cobreti/linux_netcore_env:1.0

COPY bin/Release/netcoreapp2.0/publish /var/www/portefolio

WORKDIR /var/www/portefolio

ENTRYPOINT ["dotnet", "portefolio.dll"]
