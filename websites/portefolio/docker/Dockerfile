#FROM microsoft/aspnetcore:2.0 AS base
#WORKDIR /app
#EXPOSE 80


FROM microsoft/aspnetcore-build:2.0 AS build
WORKDIR /src
COPY portefolio.sln ./
COPY portefolio ./portefolio
WORKDIR /src/portefolio
RUN dotnet restore -nowarn:msb3202,nu1503
RUN dotnet build -c Release -o /app

FROM build AS publish
RUN dotnet publish -c Release -o /app

#FROM base AS final
#WORKDIR /app
#COPY --from=publish /app .
#ENTRYPOINT ["dotnet", "portefolio.dll"]

FROM cobreti/linux_netcore_env:1.0 AS final
COPY --from=publish /app /var/www/portefolio
WORKDIR /var/www/portefolio
ENTRYPOINT ["dotnet", "portefolio.dll"]
