#!/bin/sh

echo "------------------------------------------------------------------------"
echo " SLACK endpoint "
echo "------------------------------------------------------------------------"
cd $IDEA2_HOME/platform/integrations/endpoints/slack

# System properties
export _endpoint_name=proxy
export _app_name=devtest
export _environment=dev
export _pod_id=id
export _profile=default
export _custom_domain=

export _debug=true
export _local_deployment=true

export _webservices_port=10000
export _base_domain=slingrs.io
export _endpoints_services_api=https://devtest.slingrs.io/dev/endpoints/proxy/api
export _token=d70a91c2-e835-42e0-bd3b-47b4b3adfe52

# Endpoint specific properties
export _endpoint_config="{\"botApiToken\":\"xoxb-4037701522033-4022270485493-RtKvhZHazGJN18Q0pCQQBtRZ\",\"slashCommandsToken\":\"https://devtest.slingrs.io/dev/endpoints/slack/slashCommands\"}"

npm install
node endpoint.js
echo "------------------------------------------------------------------------"
echo " END - SLACK endpoint "
echo "------------------------------------------------------------------------"

