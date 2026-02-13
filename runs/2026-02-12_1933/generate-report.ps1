# Read template
$template = Get-Content 'C:\Users\Split Lease\Documents\design-stack\templates\report-template.html' -Raw

# Read all JSON files
$runConfig = Get-Content 'run-config.json' -Raw
$layer0 = Get-Content 'layer-0\journey-context.json' -Raw
$layer1 = Get-Content 'layer-1\works-elements.json' -Raw
$layer2 = Get-Content 'layer-2\communicates-elements.json' -Raw
$layer3 = Get-Content 'layer-3\looks-elements.json' -Raw
$layer4 = Get-Content 'layer-4\behaves-elements.json' -Raw
$layer5 = Get-Content 'layer-5\feels-elements.json' -Raw
$layer6 = Get-Content 'layer-6\coherence-report.json' -Raw
$layer7 = Get-Content 'layer-7\tests-elements.json' -Raw

# Replace JSON placeholders (using simple string replace on the empty placeholders)
$template = $template -replace '<script id="run-config" type="application/json">\{"run_id":"","lens":\{\},"status":"pending"\}</script>', "<script id=`"run-config`" type=`"application/json`">$runConfig</script>"
$template = $template -replace '<script id="data-layer-0" type="application/json">\{\}</script>', "<script id=`"data-layer-0`" type=`"application/json`">$layer0</script>"
$template = $template -replace '<script id="data-layer-1" type="application/json">\{\}</script>', "<script id=`"data-layer-1`" type=`"application/json`">$layer1</script>"
$template = $template -replace '<script id="data-layer-2" type="application/json">\{\}</script>', "<script id=`"data-layer-2`" type=`"application/json`">$layer2</script>"
$template = $template -replace '<script id="data-layer-3" type="application/json">\{\}</script>', "<script id=`"data-layer-3`" type=`"application/json`">$layer3</script>"
$template = $template -replace '<script id="data-layer-4" type="application/json">\{\}</script>', "<script id=`"data-layer-4`" type=`"application/json`">$layer4</script>"
$template = $template -replace '<script id="data-layer-5" type="application/json">\{\}</script>', "<script id=`"data-layer-5`" type=`"application/json`">$layer5</script>"
$template = $template -replace '<script id="data-layer-6" type="application/json">\{\}</script>', "<script id=`"data-layer-6`" type=`"application/json`">$layer6</script>"
$template = $template -replace '<script id="data-layer-7" type="application/json">\{\}</script>', "<script id=`"data-layer-7`" type=`"application/json`">$layer7</script>"

# Apply production style guide
$template = $template -replace '--accent: #2d5a3d', '--accent: #31135D'
$template = $template -replace '--accent-light: #e8f0eb', '--accent-light: #F0EBFF'
$template = $template -replace '--accent-bright: #3a7a52', '--accent-bright: rgb(140, 104, 238)'
$template = $template -replace '--signal-success: #2d5a3d', '--signal-success: #4B47CE'
$template = $template -replace '--signal-success-bg: #e8f0eb', '--signal-success-bg: #EEEEFF'

# Add Inter and DM Sans fonts
$template = $template -replace 'Instrument\+Serif&family=Outfit', 'Instrument+Serif&family=Inter:wght@300;400;500;600;700&family=DM+Sans:wght@400;500;600;700&family=Outfit'

# Write output
$template | Out-File 'report\index.html' -Encoding UTF8 -NoNewline

Write-Host "Report generated successfully at report\index.html"
