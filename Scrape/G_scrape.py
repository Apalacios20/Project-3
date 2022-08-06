from splinter import Browser
from webdriver_manager.chrome import ChromeDriverManager
import pandas as pd

def scrape():
    executable_path = {'executable_path': ChromeDriverManager().install()}
    browser = Browser('chrome', **executable_path, headless=False)

    # Main Dictionary
    dictionary = {}

    # Charts URL
    url = 'https://www.bbc.com/news/world-us-canada-41488081'
    browser.visit(url)

    # Img Scrape
    charts = []
    chart = browser.find_by_xpath('//*[@id="main-content"]/div[5]/div/div[1]/article/div[9]/figure/div/span/span/picture/img')['src']                                
    chart2 = browser.find_by_xpath('//*[@id="main-content"]/div[5]/div/div[1]/article/div[39]/figure/div/span/span/picture/img')['src']
    chart3 = browser.find_by_xpath('//*[@id="main-content"]/div[5]/div/div[1]/article/div[48]/figure/div/span/span/picture/img')['src']                         
    charts.extend([chart, chart2, chart3])

    # Append to dictionary
    dictionary['Charts'] = charts

    # URL visit
    url = 'https://www.washingtonpost.com/news/wonk/wp/2018/06/19/there-are-more-guns-than-people-in-the-united-states-according-to-a-new-study-of-global-firearm-ownership/'
    browser.visit(url)

    # Headline
    headline = browser.find_by_xpath('//*[@id="main-content"]/span').text

    # Append to dictionary
    dictionary['Headline'] = headline

    # Paragraphs  
    paragraphs = []
    for i in range(1,3):            
        paragraph = browser.find_by_xpath('//*[@id="__next"]/div[6]/main/article/div[2]/div[2]/div[' + str(i) + ']/p').text
        paragraph2 = browser.find_by_xpath('//*[@id="__next"]/div[6]/main/article/div[2]/div[5]/p').text
        paragraph3 = browser.find_by_xpath('//*[@id="__next"]/div[6]/main/article/div[2]/div[7]/p').text
        paragraph4 = browser.find_by_xpath('//*[@id="__next"]/div[6]/main/article/div[2]/div[8]/p').text
    paragraphs.extend([paragraph, paragraph2, paragraph3, paragraph4])

    # Append to dictionary
    dictionary['Paragraphs'] = paragraphs

    browser.quit()

    return dictionary