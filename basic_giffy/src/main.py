import json
import requests
# from shutil import *
# from enum import Enum

class Json:
    def __init__(self,file_name) -> None:
        self.file_name = file_name
        self.dict = file_name
        self.subdict = None
        self.key = None

    def _load_json(self):
        """
        Opens JSON file and returns a dictionary of contained data
        """
        with open(self.file_name, "r") as f:
            dict = json.load(f)
            return dict
        
    def dump_json(self):
        """
        Opens JSON file and dumps dictionary data
        """
        self._update_dict()
        with open(self.file_name,"w") as fw:
            json.dump(self.dict, fw, indent=4)
    
    def contains(self, item, subkey= None, subsubkey= None):
        if subkey == None:
            return item in self.subdict
        if subsubkey == None:
            return item in self.subdict[subkey]
        return item in self.subdict[subkey][subsubkey]
    
    def addsubKey(self,keyName):
        """
        Creates a new subkey inside the subdictionary
        Useful for adding guild ID's to guild or user ID's to user

        if subKey already exists, return None
        """
        if self.contains(keyName):
            return None
        self.add(keyName,{})
    
    def addsubsubKey(self,subKey,subsubKey):
        """
        Creates a new subsubkey inside the dictionary
        useful for adding new tags
        """
        if self.contains(subsubKey,subKey):
            return None
        self.add(subsubKey,{},subKey)

    def add(self, item, data = None, subkey = None,subsubkey=None):
        if self.subdict != None:
            if subkey == None:
                if not self.contains(item):
                    self.subdict[item] = data
            else:
                if subsubkey == None:
                    if not self.contains(item,subkey):
                        self.subdict[subkey][item] = data
                else:
                    if not self.contains(item,subkey,subsubkey):
                        self.subdict[subkey][subsubkey][item] = data
    
    def set_file_name(self, new_file_name):
        if new_file_name[-5:].lower() == ".json":
            self.file_name = new_file_name
    
    def _update_dict(self):
        if self.key != None:
            self.dict[self.key] = self.subdict
    
    def __len__(self):
        return len(self.subdict)

class JsonGifs(Json):

    def __init__(self,file_name,key = None) -> None:
        Json.__init__(self,file_name)
        if key != None:
            self.key = self.set_catagory(key)

    def set_catagory(self, catagory):
        """
        Returns the dictionary of urls contained within the catagory
        """
        try:
            c = URLCatagories(catagory.lower())
            self._update_dict()
            self.subdict = self.dict[catagory.lower()]
            self.key = catagory
            return catagory.lower()
        except ValueError:
            return None
    
    def contains_alt_url(self, url, subkey=None,subsubkey=None):
        contains = False
        if len(url.url) > 39 and url.url[:39] == "https://cdn.discordapp.com/attachments/":
            if self.contains("https://media.discordapp.net/attachments/"+url.url[39:],subkey=subkey,subsubkey=subsubkey):
                    contains = True
        if len(url.url) > 41 and url.url[:41] == "https://media.discordapp.net/attachments/":
            if self.contains("https://cdn.discordapp.com/attachments/"+url.url[:41],subkey=subkey,subsubkey=subsubkey):
                    contains = True
        return contains

if __name__ == "__main__":
    pass


def search_gif(*ags, **kws):
    new_task_content = Element("searchBar").element.value
    search_terms = new_task_content.split(",")
    if len(search_terms) != 0 and search_terms != ['']:
        print(search_terms)
        urls = get_gifs(search_terms)
        print(urls)



def get_gifs(search_terms):
    original_search_terms = search_terms[:]
    #Add singular and plural version of search term to list
    for i in range(len(search_terms)):
        if search_terms[i][-1] != "s":
            search_terms += [search_terms[i] + "s"]
        else:
            search_terms += [search_terms[i][:-1]]
    urls = []
    scores = []
    max_tags = []
    json_tags = requests.get("https://github.com/maxcraig112/Giffy-bot/blob/main/Json/tags.json").json()
    json_archived = requests.get("https://github.com/maxcraig112/Giffy-bot/blob/main/Json/archivedcaptiongifs.json").json()
    tags_json = JsonGifs(json_tags,"global")
    #for every search term the user inputted
    for term in search_terms:
        #for every single slice of that search term
        for i in range(len(term) + 1):
            #if search term exists in tags
            if tags_json.contains(term):
                # yoink every url inside tag, if url has been grabbed before, add to existing score
                for url in tags_json.subdict[term]:
                    #if url already grabbed, increment score by one
                    if url in urls:
                        scores[urls.index(url)] += 1
                    else:
                        #otherwise, add to list, give score of 1
                        urls += [url]
                        scores += [i/len(term)]
                        caption_json = JsonGifs(json_archived,"global")
                        max_tags += [len(caption_json.subdict[url][-1])]
    
    return urls