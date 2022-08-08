import os
import shutil

base_template = "BaseTemplate"
templates_dir = "templates"

print("Welcome to Templtr")

dir_to_place_template = input("Where do you want to place the template? ")

dst_dir = None
name_of_files_and_folders = input("What would you like to name the template directory and files? ")

# Check if the directory exists
while True:
    dst_dir = f"{dir_to_place_template}/{name_of_files_and_folders}/"

    if (os.path.exists(dst_dir)):
        name_of_files_and_folders = input(f"/{name_of_files_and_folders} directory already exists. Please choose a different name: ")
        continue

    break

# Get the option selected by the user
def get_users_selected_option(options):
    for idx, element in enumerate(options):
        print("{}) {}".format(idx + 1, element))

    i = input("Please choose a template option: ")
    try:
        if 0 < int(i) <= len(options):
            return int(i) - 1
    except:
        pass
    return None

def get_template_options(templates_dir):
    list_of_templates = os.listdir(templates_dir)
    template_options = []

    for template in list_of_templates:
        dir = f"{templates_dir}/{template}"

        if os.path.isdir(dir):
            template_options.append(template)

    return template_options

template_options = get_template_options(templates_dir)
selected_index = get_users_selected_option(template_options)
selected_template = template_options[selected_index]

# Get the template to copy
src_dir = f"{templates_dir}/{selected_template}"

# Copy the template files to the user selected directory
shutil.copytree(src_dir, dst_dir)

# Get file names in the directory
# Open and rename anything with BaseTemplate
# Renmae the folders
list_of_files = os.listdir(dst_dir)

for file in list_of_files:
    old_name = f"{dst_dir}{file}"
    new_name = f"{dst_dir}{file.replace(base_template, name_of_files_and_folders)}"

    try:
        with open(old_name, "r") as f:
            data = f.read()

            # Searching and replacing the text
            # using the replace() function
            data = data.replace(base_template, name_of_files_and_folders)
            
        with open(old_name, 'w') as f:

            # Writing the replaced data in our
            # text file
            f.write(data)
    except:
        print(f"There was an error updating {file}'s contents")
        

    os.rename(old_name, new_name)
