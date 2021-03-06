<VSTemplate Version="3.0.0" xmlns="http://schemas.microsoft.com/developer/vstemplate/2005" Type="Project">
  <TemplateData>
    <Name>Stratis Smart Contract</Name>
    <DefaultName>Stratis Smart Contract</DefaultName>
    <Description>A project template for creating a new Stratis smart contract</Description>
    <ProjectType>CSharp</ProjectType>
    <ProjectSubType>
    </ProjectSubType>
    <RequiredFrameworkVersion>2.0</RequiredFrameworkVersion>
    <SortOrder>1000</SortOrder>
    <CreateNewFolder>true</CreateNewFolder>
    <ProvideDefaultName>true</ProvideDefaultName>
    <LocationField>Enabled</LocationField>
    <EnableLocationBrowseButton>true</EnableLocationBrowseButton>
    <Icon>__TemplateIcon.png</Icon>
    <CreateInPlace>true</CreateInPlace>
    <Hidden>true</Hidden>
  </TemplateData>
  <TemplateContent>
    <Project TargetFileName="Stratis.SmartContract.Contract.csproj" File="Stratis.SmartContract.Contract.csproj" ReplaceParameters="true">
      <ProjectItem ReplaceParameters="true" TargetFileName="MyContract.cs">MyContract.cs</ProjectItem>
    </Project>
  </TemplateContent>
  <WizardExtension>
    <Assembly>TemplateBuilder, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null</Assembly>
    <FullClassName>TemplateBuilder.RootWizard</FullClassName>
  </WizardExtension>
</VSTemplate>
