from flask import Flask, jsonify, render_template, request
import requests
import time
app = Flask(__name__)




@app.route('/urlapi',methods=['GET','POST'])
def url_rep():
      value = request.args.get('dmk')
      
   
      url = 'https://www.virustotal.com/vtapi/v2/url/report'

      params = {'apikey': '2890a1e47a747770095b80cce278a0ef3e9120fd55b758218faed8d434f42d05', 'resource':value}

      response = requests.get(url, params=params) 
      data=response.json()
      pos = f'{data["positives"]} security vendors flagged this URL as malicious'
      return pos
   

@app.route('/deepapi',methods=['GET','POST'])
def deep_rep():
      value = request.args.get('dmks')
      
   
      url = 'https://www.virustotal.com/vtapi/v2/domain/report'

      params = {'apikey': '2890a1e47a747770095b80cce278a0ef3e9120fd55b758218faed8d434f42d05', 'domain':value}

      response = requests.get(url, params=params) 
      data=response.json()
      
      return data
 

@app.route('/ipapi', methods=['GET', 'POST'])
def ip_dep():
   
    url="https://api.shodan.io/tools/myip?key=njJV9mRsXulqOc3nW419sHqJjyopcCFs"
    r = requests.get(url)
    
    data = r.json()
    #quote = f'name: {data["name"]}  temp : {data["main"]["temp"]} \n  temp_min : {data["main"]["temp_min"]} \n temp_max : {data["main"]["temp_max"]} \n pressure : {data["main"]["pressure"]} \n humidity : {data["main"]["humidity"]}'
    return data    


@app.route('/resapi', methods=['GET', 'POST'])
def get_values():
   #value1 = request.args.get('val1')
    value = request.args.get('rpi')
    domain=value
    url="https://api.shodan.io/dns/resolve?hostnames="+domain+"&key=njJV9mRsXulqOc3nW419sHqJjyopcCFs"
    r = requests.get(url)
    
    data = r.json()
    quote = f'  {data[domain]}'
    return quote    

   










@app.route('/')
def homescan():
   return render_template('index.html')

@app.route('/url')
def urlscaning():
   return render_template('index.html')

@app.route('/deepscan')
def deepscaning():
   return render_template('deepscan.html')

@app.route('/dnsip')
def dnsipscaning():
   return render_template('dnsip.html')

@app.route('/services')
def servicescaning():
   return render_template('services.html')

if __name__ == '__main__':
   app.run()