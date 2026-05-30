import os
from pathlib import Path
from PIL import Image

def convert_single_image(input_path, output_path=None):
    """Converts a single WebP image to PNG."""
    try:
        input_file = Path(input_path)
        
        # If no specific output path is given, use the same name but with .png
        if output_path is None:
            output_path = input_file.with_suffix('.png')
            
        # Open and convert the image
        with Image.open(input_file) as img:
            img.load() # Required for some WebP files to fully read the data
            img.save(output_path, format="PNG")
            
        print(f"✅ Converted: {input_file.name} -> {output_path.name}")
        
    except Exception as e:
        print(f"❌ Error converting {input_path}: {e}")

def convert_directory(directory_path):
    """Finds all WebP images in a directory and converts them to PNG."""
    target_dir = Path(directory_path)
    
    if not target_dir.is_dir():
        print(f"❌ The directory {directory_path} does not exist.")
        return

    # Find all .webp files in the folder
    webp_files = list(target_dir.glob("*.webp"))
    
    if not webp_files:
        print(f"No WebP files found in {directory_path}")
        return
        
    print(f"Found {len(webp_files)} WebP files. Starting conversion...\n")
    
    for file_path in webp_files:
        convert_single_image(file_path)
        
    print("\n🎉 Bulk conversion complete!")

# ==========================================
# HOW TO USE THE SCRIPT
# Uncomment the option you want to use below
# ==========================================

if __name__ == "__main__":
    
    # OPTION 1: Convert a single file
    # Replace 'sample.webp' with your file's name
    # convert_single_image('sample.webp') 
    
    # OPTION 2: Convert a whole folder
    # Replace './my_images' with the path to your folder
    convert_directory('./public/compressed')